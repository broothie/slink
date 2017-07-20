class Api::ChannelsController < ApplicationController
  def index
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
end
