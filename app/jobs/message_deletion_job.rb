class MessageDeletionJob
  include Sidekiq::Worker

  MAX_MESSAGE_COUNT = ENV.fetch('MAX_MESSAGE_COUNT', 9000).to_i

  def perform
    message_surplus = Message.count - max_message_count
    return if message_surplus <= 0

    ids = Message
      .order(created_at: :asc)
      .limit(message_surplus)
      .pluck(:id)

    Message.destroy(ids)
  end

  private

  def max_message_count
    MAX_MESSAGE_COUNT
  end
end
