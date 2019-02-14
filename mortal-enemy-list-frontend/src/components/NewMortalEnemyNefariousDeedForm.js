import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';

import ApiService from '../services/ApiService'

import './NewMortalEnemyNefariousDeedForm.scss'

class NewMortalEnemyNefariousDeedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nefarious_deed: ''
    };

    this.handleNefariousDeedChange = this.handleNefariousDeedChange.bind(this);
    this.sendNewNefariousDeed      = this.sendNewNefariousDeed.bind(this);
  }

  sendNewNefariousDeed() {
    const nefarious_deed = this.state.nefarious_deed;

    fetch(`${ApiService.host()}/enemies/${this.props.enemy_id}/add_nefarious_deed`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nefarious_deed: nefarious_deed,
      })
    })
    .then(response => {
      this.props.addNefariousDeed(nefarious_deed);
      this.setState({ nefarious_deed: '' });
    });
  }

  handleNefariousDeedChange(event) {
    this.setState({ nefarious_deed: event.target.value });
  }

  render() {
    const nefarious_deed = this.state.nefarious_deed;

    return (
      <div className="new-mortal-enemy-nefarious-deed-form">
      <input name="nefarious-deed" value={nefarious_deed} onChange={this.handleNefariousDeedChange} />
      <Button variant="outline-dark" disabled={!nefarious_deed} onClick={this.sendNewNefariousDeed}>Add new nefarious deed</Button>
      </div>
    );
  }
}

export default NewMortalEnemyNefariousDeedForm;
