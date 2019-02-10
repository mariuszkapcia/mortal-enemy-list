module Enemies
  class EnemyRankIncreased < Event
    attribute :enemy_id, Types::UUID
  end
end
