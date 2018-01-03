import axios from 'axios';

export function searchGyms(query) {
  return function(dispatch) {
    dispatch({ type: 'LOADING' });
    return axios.get('https://api.yelp.com/v3/businesses/search')
      .then(gyms => dispatch({ type: 'GET_RESULTS', payload: gyms }));
  }
}