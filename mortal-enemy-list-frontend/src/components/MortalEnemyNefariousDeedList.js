import React, { Component } from 'react';

import MortalEnemyNefariousDeed        from './MortalEnemyNefariousDeed'
import NewMortalEnemyNefariousDeedForm from './NewMortalEnemyNefariousDeedForm'
import './MortalEnemyNefariousDeedList.scss'

class MortalEnemyNefariousDeedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nefarious_deeds: this.props.nefarious_deeds
    };

    this.addNefariousDeed     = this.addNefariousDeed.bind(this);
    this.forgiveNefariousDeed = this.forgiveNefariousDeed.bind(this);
  }

  addNefariousDeed(nfarious_deed) {
    this.setState({ nefarious_deeds: [...this.state.nefarious_deeds, nfarious_deed] });
  }

  forgiveNefariousDeed(nfarious_deed) {
    this.setState({ nefarious_deeds: this.state.nefarious_deeds.filter((nd, _) => nd !== nfarious_deed) });
  }

  render() {
    const nefarious_deeds = this.state.nefarious_deeds;

    return (
      <div className="mortal-enemy-nefarious-deed-list">
        <label>Nefarious deeds:</label>
        <ul className="list">
          {
            nefarious_deeds
              .map((nefarious_deed, index) => {
                return <MortalEnemyNefariousDeed
                          key={index}
                          enemy_id={this.props.enemy_id}
                          text={nefarious_deed}
                          forgiveNefariousDeed={this.forgiveNefariousDeed} />
            })
          }
        </ul>

        <NewMortalEnemyNefariousDeedForm
          enemy_id={this.props.enemy_id}
          addNefariousDeed={this.addNefariousDeed} />
      </div>
    );
  }
}

export default MortalEnemyNefariousDeedList;
