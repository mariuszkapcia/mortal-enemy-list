import React, { Component } from 'react';

import MortalEnemy        from './MortalEnemy'
import NewMortalEnemyForm from './NewMortalEnemyForm'
import './MortalEnemyList.scss'

class MortalEnemyList extends Component {
  constructor() {
    super();

    this.state = {
      enemies: []
    };

    this.putNewEnemyOnList = this.putNewEnemyOnList.bind(this);
    this.discardEnemy      = this.discardEnemy.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3010/enemies')
      .then(response => response.json())
      .then(data => this.setState({ enemies: data }))
      .catch(error => alert('There is a problem with server connection, try again later.'))
  }

  putNewEnemyOnList(enemy) {
    this.setState({ enemies: [...this.state.enemies, enemy] });
  }

  discardEnemy(enemy_id) {
    this.setState({ enemies: this.state.enemies.filter((enemy, _) => enemy.id !== enemy_id) });
  }

  render() {
    const enemies = this.state.enemies;

    return (
      <div className="mortal-enemy-list">
        <h1>Mortal enemy list</h1>
        <hr />

        <ul className="list">
          {
            enemies.map(enemy => {
              return <MortalEnemy
                        key={enemy.id}
                        id={enemy.id}
                        name={enemy.name}
                        rank={enemy.rank}
                        discardEnemy={this.discardEnemy} />
            })
          }
        </ul>

        <NewMortalEnemyForm putNewEnemyOnList={this.putNewEnemyOnList} />
      </div>
    );
  }
}

export default MortalEnemyList;
