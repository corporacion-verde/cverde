import {combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';

import projectReducer from './projectReducer';
import generalContentReducer from './generalContentReducer';
import boardMemberReducer from './boardMemberReducer';

export default combineReducers({
  projects: projectReducer,
  general_content: generalContentReducer,
  board_members: boardMemberReducer,
});
