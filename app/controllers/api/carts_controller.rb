class Api::CartsController < ApplicationController

  def index
    @cart = current_user.cart
    render "api/carts/index"
  end

end
