Rails.application.routes.draw do
  resources :enemies, only: [:index]
end
