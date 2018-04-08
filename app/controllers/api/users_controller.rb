class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def set_cart
    @cart = Cart.find_by({user_id: self.id })

    if @cart
      return @cart
    else
      @cart = Cart.create!({user_id:self.id})
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      @user.set_cart
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :img_url)
  end
end
