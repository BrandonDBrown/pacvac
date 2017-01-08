class User < ApplicationRecord
  before_save :downcase
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence:true, length: { maximum: 255 }, format: {with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :username, uniqueness: true, presence: true

  def self.find_user_by(value)
    where(["username = :value OR email = :value", {value: value}]).first
  end

  def send_login_link
    # MOVE USER MAILER TO A MORE APPROPRIATE LOCATION
    generate_login_token

    template = 'login_link'
    UserMailer.send(template).deliver_now
  end

  def generate_login_token
    self.login_token = generate_token
    # MAKE SURE TOKENS ARE 1 USER AND EXPIRE
    self.token_generated_at = Time.now.utc
    save!
  end

  def login_link
    "http://localhost:3000/auth?token=#{self.login_token}"
  end

  def login_token_expired?
    Time.now.utc > (self.token_generated_at + token_validity)
  end

  def expire_token!
    self.login_token = nil
    save!
  end

  private

  def generate_token
    SecureRandom.hex(10)
  end

  def token_validity
    30.minutes
  end

  def downcase
    self.email = self.email.downcase
    self.username = self.username.downcase
  end
end
