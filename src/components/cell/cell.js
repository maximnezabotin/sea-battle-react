import React from 'react';
import Mark from '../mark/mark';
import './cell.css';

export default ({ cell: { x, y, type, shoot }, onShoot }) => {
  return (
    <div className="cell" onClick={onShoot}>
      { shoot && type ? <Mark /> : '' }
    </div>
  );
};
