# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  screenname      :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  icon_url        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :screenname, :password_digest, :session_token, presence: true
  validates :screenname, uniqueness: true, length: { minimum: 6 }
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_icon_url
  before_validation :ensure_session_token

  has_many :messages,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Message

  has_many :subscriptions

  has_many :channels,
    through: :subscriptions,
    source: :channel

  has_many :owned_channels,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Channel

  def self.find_by_credentials(screenname, password)
    user = find_by(screenname: screenname)
    return user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_icon_url
    self.icon_url ||= "https://robohash.org/#{self.screenname}.png"
  end
end
