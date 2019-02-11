import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';

import MortalEnemyDescription from './MortalEnemyDescription'
import MortalEnemyRank        from './MortalEnemyRank'
import './MortalEnemy.scss'

class MortalEnemy extends Component {
  constructor(props) {
    super(props);

    this.discard = this.discard.bind(this);
  }

  discard() {
    const enemy_id = this.props.enemy_id;

    fetch(`http://localhost:3010/enemies/${enemy_id}`, {
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
        <MortalEnemyDescription enemy_id={this.props.enemy_id} description={this.props.description} />
      </li>
    );
  }
}

export default MortalEnemy;
