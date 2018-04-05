class Api::ItemsController  < ApplicationController

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    @item.user_id = current_user.id

    if @item.save
      render "api/items/show"
    else
      render json: current_user.errors.full_messages, status: 422
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
        render json: current_user.errors.full_messages, status: 422
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
    @items = Item.all
  end

  def show
    @item = Item.find(params[:id])
  end

  private

  def item_params
    params.require(:items).permit(:title, :description, :price, :img_url)
  end
end
