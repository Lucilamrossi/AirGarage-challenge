import { GET_PARKINGS, LOADING, ERROR } from '../constants'
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getParkings = (location, page) => async (dispatch) => {
  try {
    if(location) {
      console.log(location)
      dispatch({
        type: LOADING,
      });
      const { data } = await axios.get(`${BACKEND_URL}parkings?location=${location}&page=${page}`);
  
      dispatch({
        type: GET_PARKINGS,
        payload: data,
      });
    } else {
        dispatch({
        type: GET_PARKINGS,
        payload: {},
      });
    }
    
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
