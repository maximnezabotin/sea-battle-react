import React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/cell/cell';
import { shoot } from '../actions';

function CellList({ cells, onShoot }) {
  return (
    <div style={{display: 'contents'}}>
      {cells.map(cell => {
        return (
          <Cell cell={ cell } onShoot={ () => onShoot(cell.x, cell.y) } key={ `${cell.x}_${cell.y}` } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cells: state.cells
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShoot: (x, y) => {
      dispatch(shoot({x, y}));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellList);