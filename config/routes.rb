Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create index]

    resource :session, only: %i[create destroy]

    resources :subscriptions, only: %i[index destroy]

    resources :channels, only: %i[create index show] do
      resources :messages, only: %i[index create]
      resources :subscriptions, only: %i[create]
    end
    post 'channels/private' => 'channels#create_private'
    post 'channels/private_by_id' => 'channels#create_private_by_id'
  end

  mount ActionCable.server => '/cable'
end
