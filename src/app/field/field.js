import React from 'react';
import Cell from './cell/cell';
import Ship from './ship/ship';
import { store } from '../store/store';
import './field.css'

export default class Field extends React.PureComponent {
  shipLayoutData = {
    shipTypes: {
      carrier: { size: 5, count: 1 },
      battleship: { size: 4, count: 1 },
      cruiser: { size: 3, count: 1 },
      submarine: { size: 3, count: 1 },
      destroyer: { size: 2, count: 1 },
    },
    layout: [
      { ship: 'carrier', positions: [[2,9], [3,9], [4,9], [5,9], [6,9]] },
      { ship: 'battleship', positions: [[5,2], [5,3], [5,4], [5,5]] },
      { ship: 'cruiser', positions: [[8,1], [8,2], [8,3]] },
      { ship: 'submarine', positions: [[3,0], [3,1], [3,2]] },
      { ship: 'destroyer', positions: [[0,0], [1,0]] }
    ]
  };

  constructor(props) {
    super(props);
    var shipCounter = 0;
    this.state = {endGame: false, log: ''};
    this.log = '';
    var unsub = store.subscribe(() => {
      var state = store.getState();
      if (state.ship === undefined) {
        return;
      }
      this.setState({log: `${state.ship} is destroyed`});

      shipCounter++;
      if (shipCounter >= this.shipLayoutData.layout.length) {
        console.log('end game');
        this.endGame = true;
        unsub();
      }
    });
  }

  render() {
    var cells = [];
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
      	cells.push(<Cell key={i+'_'+j} pos={{x: j, y: i}} />);
      }
    }
    var ships = [];
    for (var s of this.shipLayoutData.layout) {
      ships.push(<Ship key={s.ship} type={s.ship} pos={s.positions} />);
    }
    return (<div className="border">
      <div className={this.state.log != '' ? 'log' : ''}>{this.state.log}</div>
      <div className="field">{cells}{ships}</div>
    </div>);
  }
}
