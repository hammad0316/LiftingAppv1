Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :lifts
      resources :muscle_groups
      resources :users
      resources :user_lifts
      resources :workouts
    end
end
end
