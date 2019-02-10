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

  render() {
    const enemies = this.state.enemies;

    return (
      <div className="mortal-enemy-list">
        <h1>Mortal enemy list</h1>
        <hr />

        <ul className="list">
          { enemies.map(enemy => <MortalEnemy key={enemy.id} name={enemy.name} />) }
        </ul>

        <NewMortalEnemyForm putNewEnemyOnList={this.putNewEnemyOnList} />
      </div>
    );
  }
}

export default MortalEnemyList;
