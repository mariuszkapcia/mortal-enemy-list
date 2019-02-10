module Enemies
  class EnemyNefariousDeedAdded < Event
    attribute :enemy_id,       Types::UUID
    attribute :nefarious_deed, Types::String
  end
end
