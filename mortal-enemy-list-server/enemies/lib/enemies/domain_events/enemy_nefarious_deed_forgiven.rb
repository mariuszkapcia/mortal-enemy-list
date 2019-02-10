module Enemies
  class EnemyNefariousDeedForgiven < Event
    attribute :enemy_id,       Types::UUID
    attribute :nefarious_deed, Types::String
  end
end
