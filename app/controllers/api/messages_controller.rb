class Api::MessagesController < ApplicationController
  before_action :require_signed_on!

  def index
    channel = Channel.find_by(id: params[:channel_id])
    if channel
      @messages = channel.messages
      render :index
    else
      render json: ["Channel doesn't exist"], status: 404
    end
  end

  def create
    channel = Channel.find_by(id: params[:channel_id])

    @message = Message.new(message_params
      .merge(author_id: current_user.id)
      .merge(channel_id: channel.id)
    )

    if @message.save
      ChatChannel.broadcast_to(channel, message: @message.camelized_json)

      if channel.private?
        channel.users.each do |user|
          AppearanceChannel.broadcast_to(user, channel.id)
        end

        if channel.direct_with_smarter_child?
          smarter_message = Message.create(
            body: @message.similar_with_reply.reply.body,
            channel: channel,
            author: User.find_by(screenname: 'SmarterChild')
          )

          ChatChannel.broadcast_to(channel, message: smarter_message.camelized_json)
        end
      end

      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id, :timestamp)
  end
end
