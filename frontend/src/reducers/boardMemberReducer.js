import _ from 'lodash';

import {
  FETCH_BOARD_MEMBERS,
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type){
    case FETCH_BOARD_MEMBERS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    default:
      return state;
  }
}
