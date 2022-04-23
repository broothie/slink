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
#  online          :boolean          default(FALSE)
#

class User < ApplicationRecord
  validates :screenname, :password_digest, :session_token, presence: true
  validates :screenname, uniqueness: true, length: { minimum: 6 }
  validates :screenname, format: { with: /\A[[:alpha:]]\w*\z/ }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password, format: { with: /\A[\w@#$%^&*]*\z/ }
  validate :check_profanity

  attr_reader :password

  before_validation :ensure_icon_url
  before_validation :ensure_session_token

  has_many :messages,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Message,
    dependent: :destroy

  has_many :subscriptions

  has_many :channels,
    through: :subscriptions,
    source: :channel

  has_many :owned_channels,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Channel,
    dependent: :destroy

  after_create :create_smarter_chat!, unless: ->(u) { u.screenname == 'SmarterChild' }

  def self.find_by_credentials(screenname, password)
    user = find_by(screenname: screenname)
    return user if user && user.is_password?(password)
  end

  def self.smarter_child
    @smarter_child ||=
      begin
        smarter_child = User.find_by(screenname: 'SmarterChild')
        smarter_child ||= User.create!(screenname: 'SmarterChild', password: SecureRandom.alphanumeric)

        smarter_child
      end
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

  def create_smarter_chat!
    # smarter_child = User.find_by(screenname: 'SmarterChild')
    # smarter_child ||= User.create(screenname: 'SmarterChild', password: SecureRandom.urlsafe_base64)

    smarter_chat = Channel.create(
      name: [self, User.smarter_child].map(&:screenname).join(', '),
      owner: User.smarter_child,
      private: true
    )

    smarter_chat.users << self
    smarter_chat.users << User.smarter_child
  end

  def check_profanity
    if check_content(self.screenname)
      errors.add(:screenname, "can't contain profanity")
    end
  end
end
