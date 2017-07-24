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
#

class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, :timestamp, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :channel

  before_validation :ensure_timestamp

  def ensure_timestamp
    self.timestamp ||= DateTime.new
  end
end
