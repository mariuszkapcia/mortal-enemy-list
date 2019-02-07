module Enemies
  class ForgiveEnemyNefariousDeed < Command
    attribute :enemy_id,       Types::UUID
    attribute :nefarious_deed, Types::String
  end
end
