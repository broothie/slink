class Api::MessagesController < ApplicationController
  before_action :require_signed_on!

  def create
    @message = Message.new(
      message_params
        .merge(author_id: current_user.id)
        .merge(channel_id: params[:channel_id])
    )

    if @message.save
      ActionCable.server.broadcast 'messages', message: render(:show)
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id, :timestamp)
  end
end
