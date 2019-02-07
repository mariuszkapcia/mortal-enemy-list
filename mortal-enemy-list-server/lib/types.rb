require 'dry-types'

module Types
  include Dry::Types.module

  LowercasedString = Types::Strict::String.constructor(&:downcase)
  UUID             = LowercasedString.constrained(format: /\A[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}\z/i)
end
