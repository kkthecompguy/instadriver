import * as actionTypes from './actionTypes';

export const getUserLatLng = marker => (dispatch) => {
  dispatch({ 
    type: actionTypes.GET_USER_LAT_LNG,
    payload: marker
  });
}