import React, { Component } from 'react';

import MortalEnemy from './MortalEnemy'
import './MortalEnemyList.scss'

class MortalEnemyList extends Component {
  constructor() {
    super();

    this.state = {
      enemies: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3010/enemies')
      .then(response => response.json())
      .then(data => this.setState({ enemies: data }))
      .catch(error => alert('There is a problem with server connection, try again later.'))
  }

  render() {
    const enemies = this.state.enemies;

    return (
      <div className="mortal-enemy-list">
        <h1>Mortal enemy list</h1>
        <hr />
        <ul className="list">
          { enemies.map(enemy => <MortalEnemy id={enemy.id} name={enemy.name} />) }
        </ul>
      </div>
    );
  }
}

export default MortalEnemyList;
