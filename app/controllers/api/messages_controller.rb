class Api::MessagesController < ApplicationController
  before_action :require_signed_on!

  def create
    channel = Channel.find_by(id: params[:channel_id])

    @message = Message.new(
      message_params
        .merge(author_id: current_user.id)
        .merge(channel_id: channel.id)
    )

    if @message.save
      ChatChannel.broadcast_to(channel, message: render(:show))
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id, :timestamp)
  end
end
