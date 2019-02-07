module Enemies
  class DiscardEnemyFromList < Command
    attribute :enemy_id, Types::UUID
  end
end
