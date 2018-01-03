export default function loadingReducer(state = false, action) {
  switch (action.type) {
    case 'LOADING':
      return true;
    case 'GET_RESULTS':
      return false;
    case 'ERROR':
      return false;
    default:
      return state;
  }
}