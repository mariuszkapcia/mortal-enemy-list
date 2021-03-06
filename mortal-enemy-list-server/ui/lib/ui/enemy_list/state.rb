module UI
  class EnemyList::State
    def reply(event)
      handler = map_event_to_handler(event.class)
      send(handler, event)
    end

    def enemies
      @enemies
    end

    private

    def initialize
      @enemies = []
    end

    def map_event_to_handler(event_class)
      {
        'Enemies::EnemyPutOnList'             => :apply_enemy_put_on_list,
        'Enemies::EnemyDiscardedFromList'     => :apply_enemy_discarded_from_list,
        'Enemies::EnemyRankIncreased'         => :apply_enemy_rank_increased,
        'Enemies::EnemyRankDecreased'         => :apply_enemy_rank_decreased,
        'Enemies::EnemyDescriptionProvided'   => :apply_enemy_description_provided,
        'Enemies::EnemyNefariousDeedAdded'    => :apply_enemy_nefarious_deed_added,
        'Enemies::EnemyNefariousDeedForgiven' => :apply_enemy_nefarious_deed_forgiven
      }.fetch(event_class.to_s)
    end

    def apply_enemy_put_on_list(event)
      @enemies << {
        id:              event.data[:enemy_id],
        name:            event.data[:name],
        rank:            event.data[:rank],
        description:     '',
        nefarious_deeds: []
      }
    end

    def apply_enemy_discarded_from_list(event)
      @enemies.reject! { |enemy| enemy[:id] == event.data[:enemy_id] }
    end

    def apply_enemy_rank_increased(event)
      enemy         = @enemies.find { |enemy| enemy[:id] == event.data[:enemy_id] }
      enemy[:rank] += 1
    end

    def apply_enemy_rank_decreased(event)
      enemy         = @enemies.find { |enemy| enemy[:id] == event.data[:enemy_id] }
      enemy[:rank] -= 1
    end

    def apply_enemy_description_provided(event)
      enemy               = @enemies.find { |enemy| enemy[:id] == event.data[:enemy_id] }
      enemy[:description] = event.data[:description]
    end

    def apply_enemy_nefarious_deed_added(event)
      enemy = @enemies.find { |enemy| enemy[:id] == event.data[:enemy_id] }
      enemy[:nefarious_deeds].push(event.data[:nefarious_deed])
    end

    def apply_enemy_nefarious_deed_forgiven(event)
      enemy = @enemies.find { |enemy| enemy[:id] == event.data[:enemy_id] }
      enemy[:nefarious_deeds].reject! { |nefarious_deed| nefarious_deed == event.data[:nefarious_deed] }
    end
  end
end
