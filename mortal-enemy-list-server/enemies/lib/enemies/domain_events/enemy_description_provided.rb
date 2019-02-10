module Enemies
  class EnemyDescriptionProvided < Event
    attribute :enemy_id,    Types::UUID
    attribute :description, Types::String
  end
end
