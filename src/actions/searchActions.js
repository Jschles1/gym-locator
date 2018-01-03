import axios from 'axios';

export function searchGyms(query) {
  return function(dispatch) {
    dispatch({ type: 'LOADING' });
    return axios({
      method: 'get',
      url: 'https://api.yelp.com/v3/businesses/search',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_API_KEY}`
      },
      params: {
        term: 'gym',
        location: '07676',
        categories: 'fitness',
        limit: '25'
      }
    })
      .then(response => console.log(response))
      // .then(gyms => dispatch({ type: 'GET_RESULTS', payload: gyms }))
      .catch(error => {
        console.log(error)
      })
  }
}