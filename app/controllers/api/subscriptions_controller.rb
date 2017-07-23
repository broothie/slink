class Api::SubscriptionsController < ApplicationController
  def index
    @channels = current_user.channels.includes(:messages)
    render :index
  end

  def create
    @channel = Channel.find_by(id: params[:channel_id])
    if @channel
      unless current_user.channels.include?(@channel)
        current_user.channels << @channel
      end
      render 'api/channels/show', channel: @channel
    else
      render json: ["Channel doesn't exist"], status: 404
    end
  end
end
