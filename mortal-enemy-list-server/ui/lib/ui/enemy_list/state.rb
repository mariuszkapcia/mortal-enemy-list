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
        'Enemies::EnemyPutOnList'         => :apply_enemy_put_on_list,
        'Enemies::EnemyDiscardedFromList' => :apply_enemy_discarded_from_list
      }.fetch(event_class.to_s)
    end

    def apply_enemy_put_on_list(event)
      @enemies << {
        id:   event.data[:enemy_id],
        name: event.data[:name],
        rank: event.data[:rank]
      }
    end

    def apply_enemy_discarded_from_list(event)
      @enemies.reject! { |enemy| enemy[:id] == event.data[:enemy_id] }
    end
  end
end
