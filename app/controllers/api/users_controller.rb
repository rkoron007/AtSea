class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end


  def create
    @user = User.new(user_params)
    @user.setDefaultPicture
    if @user.save
      login!(@user)
      @user.set_cart
      render partial: "api/users/user", locals: { user: @user }
    else
      render json: ['Need a username and password. Please Try Again!'], status: 401
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render "api/users/show"
    else
      render json: ['Please Try Again!'], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :img_url)
  end
end
