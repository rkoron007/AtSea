class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length:{ minimum:6, allow_nil: true}

  has_many :items
  has_one :cart

  has_many :reviews,
  foreign_key: :author_id,
  class_name: "Review"

  attr_reader :password

  after_initialize :ensure_session_token
  before_create :set_default_picture
  after_create :set_cart


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

  def set_default_picture
    if !(self.img_url)
    self.img_url = "http://res.cloudinary.com/dkaolr6pg/image/upload/c_scale,h_400/v1523557539/penguin.png"
    end
  end

  def set_cart
    @cart = Cart.find_by({user_id: self.id })
    if @cart
      @cart
    else
      @cart = Cart.create!({user_id:self.id})
    end
  end

end
