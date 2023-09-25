import { setCompleted, setFailed, setFetching } from ".";
import { apiVideos } from "../api";

export const getFilmsSearch = (aka) => async (dispatch) => {
  dispatch(setFetching());
  try {
    const { results } = await apiVideos.getVideoSearch(aka);
    dispatch(setCompleted(results));
  } catch (e) {
    dispatch(setFailed(e.message));
  }
};
