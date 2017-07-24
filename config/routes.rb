Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create]

    resource :session, only: %i[create destroy]

    resources :subscriptions, only: %i[index destroy]

    resources :channels, only: %i[create index show] do
      resources :messages, only: %i[create]
      resources :subscriptions, only: %i[create]
    end
    post 'channels/private' => 'channels#create_private'
  end

  mount ActionCable.server => '/cable'
end
