import { INIT, SHOOT, CLEAR } from '../actions/types';

export default function cellReducer(state = [], action) {
  switch (action.type) {
    case INIT:
      return action.payload;
    case SHOOT:
      const cell = state.find(cell => cell.x === action.payload.x && cell.y === action.payload.y);
      cell.shoot = true;
      return state;
    case CLEAR:
      return [];
    default:
      return state;
  }
}
