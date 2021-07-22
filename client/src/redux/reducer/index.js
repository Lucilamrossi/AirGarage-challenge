import { GET_PARKINGS, LOADING, ERROR } from '../constants';

const initialState = {
  parkings: {},
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARKINGS:
      return {
        ...state,
        parkings: action.payload,
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

    // case NOT_ERROR:
    //     return {
    //         ...state,
    //         error: false
    //     };

    default:
      return state;
  }
};

export default reducer;
