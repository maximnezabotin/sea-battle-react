import { createStore } from 'redux';

var reducer = function(state, action) {
  if (state === undefined) {
    state = '-1_-1';
  }
  
  switch (action.type) {
    case 'FIRE': 
      return `${action.x}_${action.y}`;
    default: 
      return state;
  }
}

var store = createStore(reducer);

export { store };
