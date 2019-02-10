import React, { Component } from 'react';
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

    const generateEnemyRow = (enemy) => {
      return (
        <li key={enemy.id}>{enemy.name}</li>
      );
    }

    return (
      <div className="mortal-enemy-list">
        <h1>Mortal enemy list</h1>
        <hr />
        <ul>{ enemies.map(enemy => generateEnemyRow(enemy)) }</ul>
      </div>
    );
  }
}

export default MortalEnemyList;
