module Enemies
  class AddEnemyNefariousDeed < Command
    attribute :enemy_id,       Types::UUID
    attribute :nefarious_deed, Types::String
  end
end
