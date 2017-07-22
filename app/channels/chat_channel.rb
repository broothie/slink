class ChatChannel < ApplicationCable::Channel
  def subscribed
    channel = Channel.find_by(id: params[:id])
    stream_for channel
  end
end
