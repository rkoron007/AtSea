class Item < ApplicationRecord
  validates :description, :title, :user_id, :price, presence: true
  validate :ensure_we_have_a_photo
  belongs_to :user,
  foreign_key: :user_id,
  class_name: "User"

  has_many :cartings,
  foreign_key: :item_id,
  class_name: "CartItem",
  dependent: :destroy

  has_many :reviews,
  dependent: :destroy

  has_many :favorites,
  dependent: :destroy


  has_one_attached :photo

  def ensure_we_have_a_photo
    unless self.photo.attached?
        errors[:photo] << "Must be Attached"
    end
  end

  def associated_items
    Item.where(user: user).where.not(id: id).limit(3)
  end


  def self.search_results(search_params)
    if search_params
      query = '%' + search_params.downcase + '%'
      @items = Item.includes(:user).where('lower(description) LIKE ? OR lower(title) LIKE ?', query, query).to_a
    end
  end


end
