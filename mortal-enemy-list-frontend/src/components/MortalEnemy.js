import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';

import './MortalEnemy.scss'

class MortalEnemy extends Component {
  constructor(props) {
    super(props);

    this.discard      = this.discard.bind(this);
    this.increaseRank = this.increaseRank.bind(this);
    this.decreaseRank = this.decreaseRank.bind(this);
  }

  discard() {
    const enemy_id = this.props.id;

    fetch(`http://localhost:3010/enemies/${enemy_id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => this.props.discardEnemy(enemy_id))
  }

  increaseRank() {
    const enemy_id = this.props.id;

    fetch(`http://localhost:3010/enemies/${enemy_id}/increase_rank`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => this.props.increaseEnemyRank(enemy_id))
  }

  decreaseRank() {
    const enemy_id = this.props.id;

    fetch(`http://localhost:3010/enemies/${enemy_id}/decrease_rank`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => this.props.decreaseEnemyRank(enemy_id))
  }

  render() {
    return (
      <li className="mortal-enemy">
        <p className="name-rank">{this.props.name} (rank: {this.props.rank})</p>
        <Button
          className="discard-btn"
          variant="outline-dark"
          size="sm"
          onClick={this.discard}
        >Forgive</Button>
        <Button
          className="discard-btn"
          variant="outline-dark"
          size="sm"
          disabled={this.props.rank === 1}
          onClick={this.decreaseRank}
        >Decrease rank</Button>
        <Button
          className="discard-btn"
          variant="outline-dark"
          size="sm"
          onClick={this.increaseRank}
        >Increase rank</Button>
      </li>
    );
  }
}

export default MortalEnemy;
