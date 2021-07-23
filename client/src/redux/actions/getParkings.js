import { SET_QUERIES, GET_PARKINGS, LOADING, ERROR } from '../constants';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getParkings =
  ({ location, page, pageSize }) =>
  async (dispatch) => {
    try {
      if (location) {
        dispatch({
          type: LOADING,
        });
        dispatch({
          type: SET_QUERIES,
          payload: { location, page, pageSize },
        });
        const { data } = await axios.get(
          `${BACKEND_URL}parkings?location=${location}&page=${page}&pageSize=${pageSize}`
        );
        
        if(data.parkingLots.length > 0) {
          dispatch({
            type: GET_PARKINGS,
            payload: {
              parkingLots: data.parkingLots,
              totalPages: data.totalPages,
            },
          });
        } else {
          dispatch({
            type: ERROR,
            payload: 'empty'
          });
        }
        
      } else {
        dispatch({
          type: GET_PARKINGS,
          payload: { parkingLots: [], totalPages: 0 },
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
