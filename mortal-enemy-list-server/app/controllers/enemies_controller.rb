class EnemiesController < ApplicationController
  def index
    render json: [{id: 'id', name: 'name'}], status: :ok
  end
end
