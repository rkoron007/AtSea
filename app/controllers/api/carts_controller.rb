class Api::CartsController < ApplicationController

  def index
    @cart = Cart.includes(:cart_items).find_by(user_id: current_user.id)
    render "api/carts/index"
  end

end
