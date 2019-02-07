module Enemies
  class PutEnemyOnList < Command
    attribute :enemy_id, Types::UUID
    attribute :name,     Types::String
  end
end
