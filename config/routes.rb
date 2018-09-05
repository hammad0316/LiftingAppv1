Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'lifts/index'
  get 'lifts/new'
  get 'lifts/edit'
  get 'lifts/show'
  namespace :api do
    namespace :v1 do
      resources :lifts
      resources :muscle_groups
    end
end
end
