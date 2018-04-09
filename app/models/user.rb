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

  def setDefaultPicture
    if !(self.img_url)
    self.img_url = "http://res.cloudinary.com/dkaolr6pg/image/upload/v1523305258/Screen_Shot_2018-04-09_at_13.20.32.png"
    end
  end

  def set_cart
    @cart = Cart.find_by({user_id: self.id })

    if @cart

    else
      @cart = Cart.create!({user_id:self.id})
    end
  end

end
