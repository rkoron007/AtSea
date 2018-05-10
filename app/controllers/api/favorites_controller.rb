class Api::FavoritesController < ApplicationController

  def index
    @favorites = Favorite.includes(:item).where(user_id: params[:user_id]).load
  end

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id

    if @favorite.save
      render "api/favorites/show"
    else
      render json: ['Sorry try Again!'], status: 401
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])

    if @favorite.destroy
      render "api/favorites/show"
    else
      render json: ['Sorry couldn\'t find your favorite!'],status:404
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:item_id)
  end


end
