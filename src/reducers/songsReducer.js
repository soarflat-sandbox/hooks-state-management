export const initialState = {
  songs: [],
  isFetching: false,
  hasError: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SONGS_REQUEST':
      return {
        ...state,
        isFetching: true,
        hasError: false
      };
    case 'FETCH_SONGS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        songs: action.payload
      };
    case 'FETCH_SONGS_FAILURE':
      return {
        ...state,
        hasError: true,
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
