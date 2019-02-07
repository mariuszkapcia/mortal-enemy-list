module Enemies
  class RegisterEnemy < Command
    attribute :enemy_id, Types::UUID
    attribute :name,     Types::String
  end
end
