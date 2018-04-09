class Api::CartItemsController < ApplicationController

  def create
    @cart = Cart.find_by(user_id: current_user.id)
    item_params = {}
    item_params[:item_id] = cart_item_params[:itemId]
    item_params[:quantity] = cart_item_params[:quantity]
    @cart.add_item(item_params)

    if @cart.save
      render "api/carts/index"
    else
      render json: ['Could not add item'], status: 404
    end
  end

  def destroy
    @cart = Cart.find_by(user_id: current_user.id)

    set_cart_item
    if @cart_item.destroy
      render "api/carts/index"
    else
      render json: ['Could not add item'], status: 404
    end
  end


  private

  def set_cart_item
    @cart_item = CartItem.find_by(item_id: params[:id])
  end

  def cart_item_params
    params.require(:cartItem).permit(:itemId, :quantity)
  end
end
