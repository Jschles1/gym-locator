export default function resultsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_RESULTS':
      return action.payload;
    default:
      return state;
  }
}