import React from 'react';
import Mark from '../mark/mark';
import './cell.css';

/*export default class Cell extends React.PureComponent {
  render() {
    return (
      <div className="cell">
        <Mark />
      </div>
    );
  }
}*/
export default ({ cell: { x, y, type, shoot }, onShoot }) => {
  return (
    <div className="cell" onClick={onShoot}>
      { type ? <Mark /> : '' }
    </div>
  );
};
