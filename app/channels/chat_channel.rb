class ChatChannel < ApplicationCable::Channel
  def subscribed
    channel = Channel.find(params[:id])
    stream_for channel
  end
end
