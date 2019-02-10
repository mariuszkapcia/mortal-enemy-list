module Enemies
  class Enemy
    include AggregateRoot

    InvalidOperation = Class.new(StandardError)

    def initialize(id)
      @id              = id
      @rank            = 1
      @nefarious_deeds = []
    end

    def put_on_list(name)
      apply(Enemies::EnemyPutOnList.new(data: {
        enemy_id: @id,
        name:     name
      }))
    end

    def discard_from_list
      apply(Enemies::EnemyDiscardedFromList.new(data: {
        enemy_id: @id
      }))
    end

    def provide_description(description)
      apply(Enemies::EnemyDescriptionProvided.new(data: {
        enemy_id:    @id,
        description: description
      }))
    end

    def add_nefarious_deed(nefarious_deed)
      apply(Enemies::EnemyNefariousDeedAdded.new(data: {
        enemy_id:       @id,
        nefarious_deed: nefarious_deed
      }))
    end

    def forgive_nefarious_deed(nefarious_deed)
      raise InvalidOperation unless find_nefarious_deed(nefarious_deed)

      apply(Enemies::EnemyNefariousDeedForgiven.new(data: {
        enemy_id:       @id,
        nefarious_deed: nefarious_deed
      }))
    end

    def increase_rank
      apply(Enemies::EnemyRankIncreased.new(data: {
        enemy_id: @id
      }))
    end

    def decrease_rank
      raise InvalidOperation if @rank.eql?(1)

      apply(Enemies::EnemyRankDecreased.new(data: {
        enemy_id: @id
      }))
    end

    private

    def find_nefarious_deed(nefarious_deed)
      @nefarious_deeds.find { |nd| nd.eql?(nefarious_deed) }
    end

    def apply_enemy_put_on_list(event)
    end

    def apply_enemy_discarded_from_list(event)
    end

    def apply_enemy_description_provided(event)
    end

    def apply_enemy_nefarious_deed_added(event)
      @nefarious_deeds.push(event.data[:nefarious_deed])
    end

    def apply_enemy_nefarious_deed_forgived(event)
      @nefarious_deeds.reject! { |nefarious_deed| nefarious_deeds.eql?(event.data[:nefarious_deed]) }
    end

    def apply_enemy_rank_increased(event)
      @rank += 1
    end

    def apply_enemy_rank_decreased(event)
      @rank -= 1
    end
  end
end
