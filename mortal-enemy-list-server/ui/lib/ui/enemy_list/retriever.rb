module UI
  class EnemyList::Retriever
    def retrieve
      @state = reply_state
      self
    end

    def enemies
      @state.enemies
    end

    private

    def initialize(event_store:)
      @event_store = event_store
    end

    def reply_state
      all_events_in(stream_name).each_with_object(EnemyList::State.new) do |event, state|
        state.reply(event)
      end
    end

    def all_events_in(stream_name)
      @event_store.read.stream(stream_name).each.to_a
    end

    def stream_name
      'UI::EnemyListReadModel'
    end
  end
end
