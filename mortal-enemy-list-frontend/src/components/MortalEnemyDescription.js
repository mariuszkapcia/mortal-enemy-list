import React, { Component } from 'react';

import ApiService from '../services/ApiService'

import './MortalEnemyDescription.scss'

class MortalEnemyDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.description
    };

    this.timeCallback = undefined;

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.sendNewDescription      = this.sendNewDescription.bind(this);
  }

  sendNewDescription(enemy_id, description) {
    fetch(`${ApiService.host}/enemies/${enemy_id}/provide_description`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: description,
      })
    })
  }

  handleDescriptionChange(event) {
    const self = this;

    this.setState({ description: event.target.value });

    if (self.timeCallback) {
      window.clearTimeout(self.timeCallback);
    }

    self.timeCallback = window.setTimeout(() => {
      self.sendNewDescription(self.props.enemy_id, self.state.description);
    }, 1000)
  }

  render() {
    return (
      <div className="mortal-enemy-descritpion">
        <label>Description:</label>
        <textarea rows="3" value={this.state.description} onChange={this.handleDescriptionChange} />
      </div>
    );
  }
}

export default MortalEnemyDescription;
