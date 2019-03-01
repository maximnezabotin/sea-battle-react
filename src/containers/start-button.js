import { connect } from 'react-redux';
import { init } from '../actions';
import Button from '../components/button/button';

const data = {
  "shipTypes": {
    "carrier": { "size": 5, "count": 1 },
    "battleship": { "size": 4, "count": 1 },
    "cruiser": { "size": 3, "count": 1 },
    "submarine": { "size": 3, "count": 1 },
    "destroyer": { "size": 2, "count": 1 },
  },
  "layout": [
    { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
    { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] },
    { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] },
    { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] },
    { "ship": "destroyer", "positions": [[0,0], [1,0]] }
  ]
}

const typeKeys = {};

for (const d of data.layout) {
  for (const p of d.positions) {
    typeKeys[p[0]+'_'+p[1]] = d.ship;
  }
}

const getType = (x, y) => {
  return typeKeys[x+'_'+y];
};

const getCells = () => {
  const cells = [];
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const type = getType(x, y);
      cells.push({
        x: x,
        y: y,
        type: type,
        shoot: false,
        lifes: type ? data.layout.find(s => s.ship === type).positions.length : undefined
      });
    }
  }
  return cells;
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      const cells = getCells();
      dispatch(init(cells));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Button);
