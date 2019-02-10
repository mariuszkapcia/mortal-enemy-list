import React, { Component } from 'react';
import Button               from 'react-bootstrap/Button';
import uuidv4 from 'uuid/v4';

import './NewMortalEnemyForm.scss'

class NewMortalEnemyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.sendNewEnemy     = this.sendNewEnemy.bind(this);
  }

  sendNewEnemy(event) {
    fetch('http://localhost:3010/enemies', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:   uuidv4(),
        name: this.state.name,
      })
    })
    .then(response => this.setState({name: ''}));
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    const name = this.state.name;

    return (
      <div className="new-mortal-enemy-form">
        <input name="name" value={name} onChange={this.handleNameChange} />
        <Button variant="outline-dark" disabled={!name} onClick={this.sendNewEnemy}>Add a new mortal enemy</Button>
      </div>
    );
  }
}

export default NewMortalEnemyForm;
