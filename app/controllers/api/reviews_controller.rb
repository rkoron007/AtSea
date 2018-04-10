class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(item_id: params[:item_id])
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render "api/reviews/show"
    else
      render json: ['Sorry your review did not go through! Please try again'],
      status:404
    end
  end

  def delete
    @review = Review.find(params[:id])
    if @review.delete
      render "api/reviews/show"
    else
      render json: ['Sorry couldn\'t find your review!'],
      status:404
    end
  end

  private

  def review_params
    params.require(:review).permit(:item_id, :rating, :body)
  end

end
