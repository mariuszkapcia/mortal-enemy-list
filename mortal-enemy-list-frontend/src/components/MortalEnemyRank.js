import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';

import ApiService from '../services/ApiService'

import './MortalEnemyRank.scss'

class MortalEnemyRank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.description
    };

    this.increaseRank = this.increaseRank.bind(this);
    this.decreaseRank = this.decreaseRank.bind(this);
  }

  increaseRank() {
    const enemy_id = this.props.enemy_id;

    fetch(`${ApiService.host()}/enemies/${enemy_id}/increase_rank`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => this.props.increaseEnemyRank(enemy_id))
  }

  decreaseRank() {
    const enemy_id = this.props.enemy_id;

    fetch(`${ApiService.host()}/enemies/${enemy_id}/decrease_rank`, {
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
      <div className="mortal-enemy-rank">
        <label>Rank:</label>
        <p className="name-rank">{this.props.rank}</p>

        <Button
          variant="outline-dark"
          size="sm"
          disabled={this.props.rank === 1}
          onClick={this.decreaseRank}
        >▼</Button>
        <Button
          variant="outline-dark"
          size="sm"
          onClick={this.increaseRank}
        >▲</Button>
      </div>
    );
  }
}

export default MortalEnemyRank;
