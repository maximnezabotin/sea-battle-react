import React from 'react';
import Mark from '../mark/mark';
import './cell.css';

export default ({ cell: { x, y, type, shoot, lifes }, onShoot }) => {
  return (
    <div className={shoot ? 'cell active' : 'cell'} onClick={onShoot}>
      { shoot && type ? <Mark kill={lifes <= 0} /> : '' }
    </div>
  );
};
