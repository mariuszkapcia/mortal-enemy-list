module Enemies
end

require_dependency 'enemies/aggregates/enemy.rb'

require_dependency 'enemies/commands/put_enemy_on_list.rb'
require_dependency 'enemies/commands/discard_enemy_from_list.rb'
require_dependency 'enemies/commands/provide_enemy_description.rb'
require_dependency 'enemies/commands/increase_enemy_rank.rb'
require_dependency 'enemies/commands/decrease_enemy_rank.rb'
require_dependency 'enemies/commands/add_enemy_nefarious_deed.rb'
require_dependency 'enemies/commands/forgive_enemy_nefarious_deed.rb'

require_dependency 'enemies/domain_events/enemy_put_on_list.rb'
require_dependency 'enemies/domain_events/enemy_discarded_from_list.rb'
require_dependency 'enemies/domain_events/enemy_description_provided.rb'
require_dependency 'enemies/domain_events/enemy_rank_increased.rb'
require_dependency 'enemies/domain_events/enemy_rank_decreased.rb'
require_dependency 'enemies/domain_events/enemy_nefarious_deed_added.rb'
require_dependency 'enemies/domain_events/enemy_nefarious_deed_forgiven.rb'
