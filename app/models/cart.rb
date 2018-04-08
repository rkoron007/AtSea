class Cart < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  has_many :cart_items
  belongs_to :user

  def add_item(cart_item_params)
    current_cart_item = cart_items.find_by(item_id: cart_item_params[:item_id])

    debugger
    if current_cart_item
      current_cart_item.quantity += cart_item_params[:quantity].to_i
      current_cart_item.save!
    else
      new_item = cart_items.create(
      item_id: cart_item_params[:item_id],
      quantity: cart_item_params[:quantity],
      cart_id: self.id)
    end
    new_item
  end

end
