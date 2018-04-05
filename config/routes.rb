Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :items
    resources :users, only: [:create, :show]
    resource :session, only: [:destroy, :create]
  end

  root "static_pages#root"

end
