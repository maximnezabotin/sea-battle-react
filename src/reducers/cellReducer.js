import { INIT, SHOOT, CLEAR } from '../actions/types';

export default function cellReducer(state = [], action) {
  switch (action.type) {
    case INIT:
      return [...action.payload];
    case SHOOT:
      const newState = [...state];
      const cell = newState.find(cell => cell.x === action.payload.x && cell.y === action.payload.y);
      cell.shoot = true;
      if (cell.type) {
        newState.filter(c => c.type === cell.type).map(c => c.lifes--);
      }
      return newState;
    case CLEAR:
      return [];
    default:
      return state;
  }
}
