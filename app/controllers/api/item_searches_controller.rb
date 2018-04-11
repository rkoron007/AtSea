class Api::ItemSearchesController < ApplicationController

  def index
    @items = Item.search_results(item_search_params[:description])
  end


  private

  def item_search_params
    params.require(:search).permit(:description)
  end

end
