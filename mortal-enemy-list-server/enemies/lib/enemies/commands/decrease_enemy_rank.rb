module Enemies
  class DecreaseEnemyRank < Command
    attribute :enemy_id, Types::UUID
  end
end
