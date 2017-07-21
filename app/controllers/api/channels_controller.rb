class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.where(
      'lower(name) LIKE ?',
      "%#{channel_query_params[:name_query].downcase}%"
    ).includes(:owner)

    render :index
  end

  def create
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
end
