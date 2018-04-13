class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])
      debugger
    if @user
      login!(@user)
      render partial: "api/users/user", locals: { user: @user }

    else
      render json: ['Invalid username or password. Please Try Again!'], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render "api/users/show"
    else
      render json: ["Sorry couldn't find a user to logout!"], status: 404
    end
  end
end
