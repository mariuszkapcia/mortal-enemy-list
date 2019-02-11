import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';

import './MortalEnemyNefariousDeed.scss'

class MortalEnemyNefariousDeed extends Component {
  constructor(props) {
    super(props);

    this.sendForgiveNefariousDeed = this.sendForgiveNefariousDeed.bind(this);
  }

  sendForgiveNefariousDeed() {
    const enemy_id = this.props.enemy_id;

    fetch(`http://localhost:3010/enemies/${enemy_id}/forgive_nefarious_deed`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nefarious_deed: this.props.text,
      })
    })
    .then(response => this.props.forgiveNefariousDeed(this.props.text))
  }

  render() {
    return (
      <li className="mortal-enemy-nefarious-deed">
        {this.props.text}

        <Button
          variant="outline-dark"
          size="sm"
          onClick={this.sendForgiveNefariousDeed}
        >X</Button>
      </li>
    );
  }
}

export default MortalEnemyNefariousDeed;
