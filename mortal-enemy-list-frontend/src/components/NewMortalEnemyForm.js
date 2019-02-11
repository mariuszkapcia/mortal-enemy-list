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
    const uuid = uuidv4();
    const name = this.state.name;

    fetch('http://localhost:3010/enemies', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:   uuid,
        name: name,
      })
    })
    .then(response => {
      this.props.putNewEnemyOnList({ id: uuid, name: name });
      this.setState({name: ''});
    });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    const name = this.state.name;

    return (
      <div className="new-mortal-enemy-form">
        <input name="name" value={name} onChange={this.handleNameChange} />
        <Button variant="outline-dark" disabled={!name} onClick={this.sendNewEnemy}>Add new mortal enemy</Button>
      </div>
    );
  }
}

export default NewMortalEnemyForm;
