class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length:{ minimum:6, allow_nil: true}

  has_many :items
  has_one :cart
  # has_many :comments

  attr_reader :password

  after_initialize :ensure_session_token


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

  def self.find_by_credentials(username, password)
    @user = User.find_by(username:username)
    return @user if @user && @user.is_password?(password)
    nil
  end


end
