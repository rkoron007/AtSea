Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :items
    resources :users, only: [:create, :show]
    resources :cart, only: [:index]
    resources :cart_items, only: [:create, :destroy]
    resource :session, only: [:destroy, :create]
  end

  root "static_pages#root"

end
