Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :index, :show]
    resource :session, only: [:new, :destroy, :create]
  end

  root "static_pages#root"

end
