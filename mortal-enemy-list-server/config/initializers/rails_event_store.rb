require 'rails_event_store'
require 'aggregate_root'
require 'arkency/command_bus'

Rails.configuration.to_prepare do
  Rails.configuration.event_store = event_store = RailsEventStore::Client.new
  Rails.configuration.command_bus = command_bus = Arkency::CommandBus.new

  AggregateRoot.configure do |config|
    config.default_event_store = event_store
  end

  # UI bounded context.
  event_store.subscribe(
    UI::EnemyList::Builder.new(event_store: event_store),
    to: [
      Enemies::EnemyPutOnList,
      Enemies::EnemyDiscardedFromList
    ]
  )

  # Enemies commands.
  command_bus.register(Enemies::PutEnemyOnList, Enemies::OnPutEnemyOnList.new(event_store))
  command_bus.register(Enemies::DiscardEnemyFromList, Enemies::OnDiscardEnemyFromList.new(event_store))
  command_bus.register(Enemies::ProvideEnemyDescription, Enemies::OnProvideEnemyDescription.new(event_store))
  command_bus.register(Enemies::AddEnemyNefariousDeed, Enemies::OnAddEnemyNefariousDeed.new(event_store))
  command_bus.register(Enemies::ForgiveEnemyNefariousDeed, Enemies::OnForgiveEnemyInfariousDeed.new(event_store))
  command_bus.register(Enemies::IncreaseEnemyRank, Enemies::OnIncreaseEnemyRank.new(event_store))
  command_bus.register(Enemies::DecreaseEnemyRank, Enemies::OnDecreaseEnemyRank.new(event_store))
end
