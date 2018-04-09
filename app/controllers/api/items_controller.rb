class Api::ItemsController < ApplicationController

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render "api/items/show"
    else
      render json: ['Sorry invalid item, please try again.'], status: 422
    end
  end

  def edit
    @item = Item.find(params[:item][:id])
    if @item.user != current_user
      render "api/items/show"
    end
  end

  def update
    @item = Item.find(params[:item][:id])
    if @item.user_id == current_user.id
      if @item.update_attributes(item_params)
        render "api/items/show"
      else
        render json: ['Sorry the item did not update, please try again.'], status: 422
      end
    else
      render "api/items/show"
    end
  end

  def destroy
    @item = Item.find(params[:id])
    if @item.user_id == current_user.id
      if @item.destroy
        render :show
      else
        render json: @item.errors.full_messages, status: 422
      end
    end
  end

  def index
    @items = Item.all.includes(:user)
  end

  def show
    @item = Item.includes(user: [:items]).find(params[:id])
  end

  private

  def item_params
    params.require(:item).permit(:title, :description, :price, :img_url, :user_id)
  end
end
