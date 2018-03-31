class Api::SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])

    if @user
      login!(@user)
      render "api/users/show"
    else
      render :json ['Invalid username or password. Please Try Again!'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Sorry couldn't find a user to logtout!"]
  end
end
