class Api::CartController < ApplicationController
  before_action :require_logged_in

  def index
    @cart = Cart.find_by(user_id: current_user.id)
  end


end
