import _ from 'lodash';

import {FETCH_PROJECTS} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type){
    case FETCH_PROJECTS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    default:
      return state;
  }
}
