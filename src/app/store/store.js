import { createStore } from 'redux';

var reducer = function(state, action) {
  if (state === undefined) {
    state = '-1_-1';
  }
  
  switch (action.type) {
    case 'FIRE': 
      return {x: action.x, y: action.y};
    case 'SHIP':
      return {ship: action.ship};
    default: 
      return state;
  }
}

var store = createStore(reducer);

export { store };
