class Api::CartItemsController < ApplicationController
  before_action :require_logged_in
  before_action :set_cart_item

  def create
    @cart = Cart.find(user_id: current_user.id)
    @cart.add_item(cart_item_params)

    if @cart.save

    else
      render json: ['Could not add item']
    end
  end

  def destroy
    @cart_item.destroy
  end


  private

  def set_cart_item
    @cart_item = CartItem.find(params[:id])
  end

  def cart_item_params
    params.require(:cart_item).permit(:item_id, :quantity)
  end
end
