class SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(params[:user][:email],params[:user][:password])

    if @user
      login!(@user)
      # you'll redirect to either your user page or listing page
    else
      flash[:errors] = ['Sorry- those were Invalid Credentials. Please Try Again!']
        # you'll redirect to new session
    end
  end

  def destroy
    logout
    # redirect to new_session_url
  end
end
