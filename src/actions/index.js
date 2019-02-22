import { SHOOT, INIT, CLEAR } from './types';

export const init = (cells) => ({
  type: INIT,
  payload: cells
});

export const shoot = ({ x, y }) => ({
  type: SHOOT,
  payload: { x, y }
});

export const clear = () => ({
  type: CLEAR
});
