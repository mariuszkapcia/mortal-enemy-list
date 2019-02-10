class EnemiesController < ApiController
  def index
    enemies = UI::EnemyList::Retriever.new(event_store: event_store).retrieve.enemies

    render json: enemies, status: :ok
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

  def destroy
    command_bus.call(
      Enemies::DiscardEnemyFromList.new(
        enemy_id: params[:id]
      )
    )

    head :no_content
  end

  private

  def command_bus
    Rails.configuration.command_bus
  end

  def event_store
    Rails.configuration.event_store
  end
end
