module Enemies
  class EnemyPutOnList < Event
    attribute :enemy_id, Types::UUID
    attribute :name,     Types::String
  end
end
