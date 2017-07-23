class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.where(
      'lower(name) LIKE ?',
      "%#{channel_query_params[:name_query].downcase}%"
    ).includes(:owner)

    render :index
  end

  def create
    @channel = Channel.new(channel_params.merge(owner_id: current_user.id))
    if @channel.save
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

  private

  def channel_query_params
    params.require(:channel).permit(:name_query)
  end

  def channel_params
    params.require(:channel).permit(:name)
  end
end
