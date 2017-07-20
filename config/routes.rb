Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create] do
      resources :teams, only: %i[index]
    end

    resource :session, only: %i[create destroy]

    resources :memberships, only: %i[create destroy]

    resources :teams, only: %i[index create] do
      resources :channels, only: %i[index create]
    end

    resources :subscriptions, only: %i[create destroy]

    resources :channels, only: %i[show] do
      resources :messages, only: %i[create]
    end
  end

  mount ActionCable.server => '/cable'
end
