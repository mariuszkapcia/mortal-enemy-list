import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';

import ApiService from '../services/ApiService'

import MortalEnemyDescription       from './MortalEnemyDescription'
import MortalEnemyRank              from './MortalEnemyRank'
import MortalEnemyNefariousDeedList from './MortalEnemyNefariousDeedList'
import './MortalEnemy.scss'

class MortalEnemy extends Component {
  constructor(props) {
    super(props);

    this.discard = this.discard.bind(this);
  }

  discard() {
    const enemy_id = this.props.enemy_id;

    fetch(`${ApiService.host()}/enemies/${enemy_id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => this.props.discardEnemy(enemy_id))
  }

  render() {
    return (
      <li className="mortal-enemy">
        <div className="top-section">
          <p className="name">{this.props.name}</p>

          <Button
            className="discard-btn"
            variant="outline-dark"
            size="sm"
            onClick={this.discard}
          >Forgive</Button>
        </div>

        <MortalEnemyRank
          enemy_id={this.props.enemy_id}
          rank={this.props.rank}
          increaseEnemyRank={this.props.increaseEnemyRank}
          decreaseEnemyRank={this.props.decreaseEnemyRank} />
        <MortalEnemyDescription
          enemy_id={this.props.enemy_id}
          description={this.props.description} />
        <MortalEnemyNefariousDeedList
          enemy_id={this.props.enemy_id}
          nefarious_deeds={this.props.nefarious_deeds} />
      </li>
    );
  }
}

export default MortalEnemy;
