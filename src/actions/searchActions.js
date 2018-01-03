import axios from 'axios';

export function searchGyms() {
  return function(dispatch) {
    dispatch({ type: 'LOADING' });
    return axios.get('')
      .then(gyms => dispatch({ type: 'GET_RESULTS', payload: gyms }));
  }
}