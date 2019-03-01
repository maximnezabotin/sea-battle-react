import React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/cell/cell';
import Text from '../components/text/text';
import Button from '../components/button/button';
import { shoot, init } from '../actions';
import { getCells } from './layout'
import './game.css';

function Game({ cells, onShoot, onStart, onMenu }) {
  return (
    <div className={'main ' + (cells.length ? 'game' : 'menu')}>
      <Text type="title" text="Battleship" />
      {cells.length ?
      <div className="desk">
        {cells.map(cell => {
          return (
            <Cell 
              key={`${cell.x}_${cell.y}`}
              cell={cell}
              onShoot={ () => onShoot(cell.x, cell.y) } />
          );
        })}
      </div> : <Button text="Start" onClick={onStart}/> }
      <Text text={`Maxim Nezabotin ${new Date().getFullYear()} (c)`} />
      {!cells.length || cells.filter(c => c.type && !c.shoot).length ? '' : <div className="game-over"><Text type="title end" text="END GAME" /><Button text="Menu" onClick={onMenu}/></div> }
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
    onStart: () => {
      const cells = getCells();
      dispatch(init(cells));
    },
    onShoot: (x, y) => {
      dispatch(shoot({x, y}));
    },
    onMenu: () => {
      dispatch(init([]));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);