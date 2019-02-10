class EnemiesController < ApiController
  def index
    render json: [{id: 'id', name: 'name'}], status: :ok
  end

  def create
    command_bus.call(
      Enemies::PutEnemyOnList.new(
        enemy_id: params[:id],
        name:     params[:name]
      )
    )

    head :no_content
  end

  private

  def command_bus
    Rails.configuration.command_bus
  end
end
