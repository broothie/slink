class Api::ChannelsController < ApplicationController
  before_action :require_signed_on!

  def index
    @channels = Channel.where(
      'lower(name) LIKE ?',
      "%#{channel_query_params[:name_query].downcase.chars.join('%')}%"
    ).where(private: false).includes(:owner)

    render :index
  end

  def create
    @channel = Channel.new(channel_params.merge(owner_id: current_user.id))
    if @channel.save
      current_user.channels << @channel
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = Channel.find_by(id: params[:id])
    if @channel
      render :show
    else
      render json: ["Channel doesn't exist"], status: 404
    end
  end

  def create_private
    screennames = private_channel_params[:screennames]
    screennames.push(current_user.screenname)
    screennames.uniq!

    users = User.where(screenname: screennames)

    @channel = Channel.new(
      name: users.map(&:screenname).join(', '),
      owner_id: current_user.id,
      private: true
    )

    if @channel.save
      @channel.users.concat(users)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def create_private_by_id
    user_ids = (private_channel_params[:ids] + [current_user.id]).map(&:to_i)

    @channel = Channel.find_by_user_ids(user_ids).first
    if @channel
      render :show
      return
    end

    users = User.where(id: user_ids)

    @channel = Channel.new(
      name: users.map(&:screenname).join(', '),
      owner_id: current_user.id,
      private: true
    )

    if @channel.save
      @channel.users.concat(users)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_query_params
    params.require(:channel).permit(:name_query)
  end

  def channel_params
    params.require(:channel).permit(:name)
  end

  def private_channel_params
    params.require(:channel).permit(screennames: [], ids: [])
  end
end
