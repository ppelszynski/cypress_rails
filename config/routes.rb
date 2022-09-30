# frozen_string_literal: true

Rails.application.routes.draw do
  resources :posts
  devise_for :users
  root 'home#index'

  resources :home, only: :index


  # https://github.com/shakacode/cypress-on-rails/issues/16#issuecomment-501911684
  unless Rails.env.production?
    scope path: "/__cypress__", controller: 'cypress' do
      post "forceLogin", action: 'force_login'
    end
  end
end
