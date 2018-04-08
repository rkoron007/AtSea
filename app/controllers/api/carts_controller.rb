class Api::CartsController < ApplicationController

  def index
    @cart = Cart.find_by(user_id: current_user.id)
    render "api/carts/index"
  end

end
