import React from 'react';
import Cell from '../cell/cell';
import './desk.css';

export default class Desk extends React.PureComponent {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    const cells = [];
    for (let i = 0; i < 100; i++) {
      cells.push(<Cell key={i} />);
    }
    return (
      <div className="desk">{cells}</div>
    );
  }
}
