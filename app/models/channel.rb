# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          default(1), not null
#

class Channel < ApplicationRecord
  validates :name, presence: true

  has_many :subscriptions

  has_many :users,
    through: :subscriptions,
    source: :user
    
  has_many :messages
  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User
end
