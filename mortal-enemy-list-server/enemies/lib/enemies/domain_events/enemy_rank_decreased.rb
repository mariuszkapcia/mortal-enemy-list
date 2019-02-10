module Enemies
  class EnemyRankDecreased < Event
    attribute :enemy_id, Types::UUID
  end
end
