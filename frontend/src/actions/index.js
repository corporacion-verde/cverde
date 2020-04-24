import backend from '../apis/backend';
import {FETCH_PROJECTS} from './types';

export const fetchProjects = () => async dispatch => {
    const response = await backend.get('/projects');
    dispatch({type: FETCH_PROJECTS, payload: response.data});
}
