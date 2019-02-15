import React from 'react';
import Mark from '../mark/mark';
import './cell.css';

export default class Cell extends React.PureComponent {
  render() {
    return (
      <div className="cell">
        <Mark />
      </div>
    );
  }
}
