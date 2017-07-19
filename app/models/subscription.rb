# == Schema Information
#
# Table name: subscriptions
#
#  id         :integer          not null, primary key
#  user_id    :string           not null
#  channel_id :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ApplicationRecord
  validates :user_id, :channel_id, presence: true
  validates :user_id, uniqueness: { scope: [:channel_id] }

  belongs_to :user
  belongs_to :channel
end
