class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length:{ minimum:6, allow_nil: true}

  # has_many :listings

  attr_reader :password

  after_initialize: ensure_session_token


  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    @user = User.find(:email)
    return @user if @user && @user.is_password?(password)
    nil
  end

end
