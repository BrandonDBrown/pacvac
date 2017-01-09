Rails.application.routes.draw do
  get 'pages/home'

  get 'pages/quote'

  get '/auth/:user_id/:token', to: 'sessions#auth'

  resources :users, only: [:create]
  get '/register', to: 'users#register'
  resources :sessions, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
