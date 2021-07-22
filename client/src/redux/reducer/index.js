import { SET_QUERIES, GET_PARKINGS, LOADING, ERROR } from '../constants';

const initialState = {
  parkings: [],
  totalPages: 0,
  loading: false,
  error: false,
  queries: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERIES:
      return {
        ...state,
        queries: action.payload
      }
    case GET_PARKINGS:
      return {
        ...state,
        parkings: action.payload.parkingLots,
        totalPages: action.payload.totalPages,
        loading: false,
        error: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
