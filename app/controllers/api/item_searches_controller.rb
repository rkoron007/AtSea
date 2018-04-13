class Api::ItemSearchesController < ApplicationController

  def index
    @items = Item.search_results(item_search_params[:description])
    unless @items.empty?
      render "api/items/index"
    else
      render json: ['Could not find any items! Please Try Again!'], status: 404
    end
  end



  private

  def item_search_params
    params.require(:search).permit(:description)
  end

end
