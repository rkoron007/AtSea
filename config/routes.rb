Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :items, except: [:edit]
    resources :users, only: [:create, :show]
    resources :carts, only: [:index]
    resources :cart_items, only: [:create, :destroy]
    resource :session, only: [:destroy, :create]
  end
  # get "items/:id/edit", :to => "items#edit"

  root "static_pages#root"

end
