import React, { Component } from 'react';
import './MortalEnemy.scss'

class MortalEnemy extends Component {
  render() {
    return (
      <li className="mortal-enemy" key={this.props.id}>{this.props.name}</li>
    );
  }
}

export default MortalEnemy;
