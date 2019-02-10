module Enemies
  class EnemyDiscardedFromList < Event
    attribute :enemy_id, Types::UUID
  end
end
