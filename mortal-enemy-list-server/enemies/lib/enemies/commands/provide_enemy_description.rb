module Enemies
  class ProvideEnemyDescription < Command
    attribute :enemy_id,    Types::UUID
    attribute :description, Types::String
  end
end
