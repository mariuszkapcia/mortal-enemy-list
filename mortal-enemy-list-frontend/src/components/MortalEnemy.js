import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';

import './MortalEnemy.scss'

class MortalEnemy extends Component {
  constructor(props) {
    super(props);

    this.discard = this.discard.bind(this);
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

  render() {
    return (
      <li className="mortal-enemy">
        <p className="name-rank">{this.props.name} | rank: {this.props.rank}</p>
        <Button className="discard-btn" variant="outline-dark" onClick={this.discard}>Forgive</Button>
      </li>
    );
  }
}

export default MortalEnemy;
