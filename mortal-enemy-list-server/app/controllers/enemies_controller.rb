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

  def increase_rank
    command_bus.call(
      Enemies::IncreaseEnemyRank.new(
        enemy_id: params[:id]
      )
    )

    head :no_content
  end

  def decrease_rank
    command_bus.call(
      Enemies::DecreaseEnemyRank.new(
        enemy_id: params[:id]
      )
    )

    head :no_content
  end

  def provide_description
    command_bus.call(
      Enemies::ProvideEnemyDescription.new(
        enemy_id:    params[:id],
        description: params[:description]
      )
    )

    head :no_content
  end

  def add_nefarious_deed
    command_bus.call(
      Enemies::AddEnemyNefariousDeed.new(
        enemy_id:       params[:id],
        nefarious_deed: params[:nefarious_deed]
      )
    )

    head :no_content
  end

  def forgive_nefarious_deed
    command_bus.call(
      Enemies::ForgiveEnemyNefariousDeed.new(
        enemy_id:       params[:id],
        nefarious_deed: params[:nefarious_deed]
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
