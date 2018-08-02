Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :items do
      resources :reviews, only: [:create, :index]
    end
    resources :item_searches, only: [:index]
    resources :reviews, only: [:destroy]
    resources :users, only: [:create, :show] do
      resources :favorites, only: [:index]
    end
    resources :favorites, only: [:create, :destroy]
    resources :carts, only: [:index]
    resources :cart_items, only: [:create, :destroy]
    resource :session, only: [:destroy, :create]
  end

 root to: "static_pages#root"

end
