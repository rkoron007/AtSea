class Api::ItemsController  < ApplicationController

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
      debugger
    if @item.save
      render "api/items/show"
    else
      render json: ['NAH'], status: 422
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])

    if @item.user_id == current_user.id
      if @item.update_attributes(item_params)
        render "api/items/show"
      else
        render json: ['NO'], status: 422
      end
    end
  end

  def delete
    @item = Item.find(params[:id])

    if @item
      @item.delete!
      render "api/items/index"
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
