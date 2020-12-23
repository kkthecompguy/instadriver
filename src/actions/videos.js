import * as actionTypes from './actionTypes';

export const changeVideo = (videoId, url) => dispatch => {
  dispatch({
    type: actionTypes.CHANGE_CURR_VIDEO,
    payload: { videoId, url }
  });
}