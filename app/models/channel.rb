# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: true # TODO: Validate team_id

  has_many :users
  has_many :messages
  # belongs_to :team # TODO: Create team association
end
