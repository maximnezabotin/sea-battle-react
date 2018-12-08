import React from 'react';

import Cell from './cell/cell';

import './field.css'

export default class Field extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    var cells = [];
    for (var i = 1; i <= 10; i++) {
      for (var j = 1; j <= 10; j++) {
      	cells.push(<Cell pos={{x: i, y: j}} />);
      }
    }
    return (<div className="field">{cells}</div>);
  }
}
