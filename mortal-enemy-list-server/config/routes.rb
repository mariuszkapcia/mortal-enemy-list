Rails.application.routes.draw do
  resources :enemies, only: [:index, :create, :destroy] do
    put :increase_rank,       on: :member
    put :decrease_rank,       on: :member
    put :provide_description, on: :member
  end
end
