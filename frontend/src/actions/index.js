import backend from '../apis/backend';
import {
  FETCH_PROJECT,
  FETCH_PROJECTS,
  FETCH_CONTENT,
} from './types';

export const fetchProjects = () => async dispatch => {
    const response = await backend.get('/projects/');
    dispatch({type: FETCH_PROJECTS, payload: response.data});
}

export const fetchProject = (id) => async dispatch => {
    const response = await backend.get(`/projects/${id}/`);
    dispatch({type: FETCH_PROJECT, payload: response.data});
}

export const fetchContent = (code) => async dispatch => {
  const response = await backend.get(`/generalcontents/contents/${code}`);
  dispatch({type: FETCH_CONTENT, payload: response.data});
}
