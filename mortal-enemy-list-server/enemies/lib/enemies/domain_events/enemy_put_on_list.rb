module Enemies
  class EnemyPutOnList < Event
    attribute :enemy_id, Types::UUID
    attribute :name,     Types::String
    attribute :rank,     Types::Integer
  end
end
