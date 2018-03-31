class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      # you'll redirect to either your user page or listing page
    else
      flash[:errors] = @user.errors.full_messages
        # you'll redirect to new
    end
  end
end
