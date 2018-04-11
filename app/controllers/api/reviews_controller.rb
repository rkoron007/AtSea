class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.includes(:user).where(item_id: params[:item_id]).load
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id

    if @review.save
      render "api/reviews/show"
    else
      render json: ['Sorry your review did not go through! Please try again'],
      status:404
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
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
