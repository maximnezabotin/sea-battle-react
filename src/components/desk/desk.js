import React from 'react';
import CellList from '../../containers/cell-list';
import './desk.css';

export default class Desk extends React.PureComponent {
  render() {
    return (
      <div className="desk">
        <CellList />
      </div>
    );
  }
}
