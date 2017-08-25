# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          default(1), not null
#  private    :boolean          default(FALSE)
#

class Channel < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  validate :check_profanity

  has_many :subscriptions

  has_many :users,
    through: :subscriptions,
    source: :user

  has_many :messages, dependent: :destroy

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  def self.find_by_user_ids(user_ids)
    user_ids.uniq!
    user_ids.sort!
    includes(:users).select do |channel|
      user_ids == channel.users.map(&:id).sort
    end
  end

  def self.exists_by_user_ids?(user_ids)
    !find_by_user_ids(user_ids).empty?
  end

  def direct?
    private? && users.count == 2
  end

  def with_smarter_child?
    users.exists?(User.find_by(screenname: 'SmarterChild'))
  end

  def direct_with_smarter_child?
    direct? && with_smarter_child?
  end

  def check_profanity
    if check_content(self.name)
      errors.add(:name, "can't contain profanity")
    end
  end
end
