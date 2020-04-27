import {FETCH_CONTENT} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type){
    case FETCH_CONTENT:
      return {...state, [action.payload.code]: action.payload};
    default:
      return state;
  }
}
