class Item < ApplicationRecord
  validates :description, :title, :user_id, :img_url, :price, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: "User",
  dependent: :destroy

  has_many :cartings,
  foreign_key: :item_id,
  class_name: "CartItem",
  dependent: :destroy


  has_many :reviews,
  dependent: :destroy


  def associated_items
    Item.where(user: user).where.not(id: id).limit(3)
  end

  def self.search_results(search_params)
    if search_params
      query = '%' + search_params.downcase + '%'
      @items = Item.where('lower(description) LIKE ? OR lower(title) LIKE ?', query, query).limit(5).to_a
    end
  end

end
