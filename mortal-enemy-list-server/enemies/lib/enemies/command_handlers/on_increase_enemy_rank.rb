module Enemies
  class OnIncreaseEnemyRank
    def call(command)
      command.verify!

      ActiveRecord::Base.transaction do
        enemy = Enemy.new(command.enemy_id)
        enemy.load(stream_name(command.enemy_id), event_store: @event_store)
        enemy.increase_rank
        enemy.store(event_store: @event_store)
      end
    end

    private

    def initialize(event_store)
      @event_store = event_store
    end

    def stream_name(enemy_id)
      "Enemies::Enemy$#{enemy_id}"
    end
  end
end