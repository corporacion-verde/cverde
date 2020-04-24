import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';

import projectReducer from './projectReducer';

export default combineReducers({
  projects: projectReducer
});
