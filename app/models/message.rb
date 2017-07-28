# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  timestamp  :datetime         not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  prompt_id  :integer
#

class Message < ApplicationRecord
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :channel

  belongs_to :prompt,
    primary_key: :id,
    foreign_key: :prompt_id,
    class_name: :Message,
    optional: true

  has_one :reply,
    primary_key: :id,
    foreign_key: :prompt_id,
    class_name: :Message

  before_validation :ensure_timestamp

  validates :body, :author_id, :channel_id, :timestamp, presence: true

  after_create :detect_prompt

  def ensure_timestamp
    self.timestamp ||= Time.new
  end

  def detect_prompt
    return if prompt

    # Only look in direct messages
    return unless channel.direct?
    return if channel.with_smarter_child?

    # Find previous message
    message_pool = channel.messages.order(timestamp: :asc)
    index = message_pool.index(self)
    candidate_prompt = message_pool[index - 1] unless index - 1 < 0
    return unless candidate_prompt

    # Only look at previous messages from other user
    return if candidate_prompt.author == author

    # Only look at messages sent consecutively within a timeframe
    return unless (self.timestamp - candidate_prompt.timestamp) < 15 * 60

    prompt = candidate_prompt
    save
  end

  def similar_with_reply
    similars = self.class.where(
      'lower(body) LIKE ?',
      "%#{body.downcase.chars.join('%')}%"
    ).where.not(reply: nil)
    return similars.sample unless similars.empty?

    self.class.where.not(reply: nil).sample
  end

  def camelized_json
    attributes.merge('author_screenname' => author.screenname).each_with_object({}) do |(key, value), hash|
      hash[key.camelize(:lower)] = value
    end
  end
end
