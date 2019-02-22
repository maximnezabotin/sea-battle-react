import { combineReducers } from 'redux';
import cells from './cellReducer';

export default combineReducers({
    cells: cells
});