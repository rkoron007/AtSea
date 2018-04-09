class Api::CartsController < ApplicationController

  def index
    # @cart_items = []
    # @cart.cart_items.each do |cart_item|
    #   cart_item.quantity.times do
    #     @cart_items << [cart_item.item, cart_item.quantity]
    #   end
    # end
    @cart = Cart.find_by(user_id: current_user.id)
    render "api/carts/index"
  end

end
