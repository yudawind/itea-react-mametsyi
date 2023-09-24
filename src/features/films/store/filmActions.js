import { setCompleted, setFailed, setFetching } from ".";
import { apiVideos } from "../api";

export const getFilmsAction = () => async (dispatch) => {
  dispatch(setFetching());
  try {
    const { results } = await apiVideos.getVideos();
    // console.log(results, 8);
    dispatch(setCompleted(results));
  } catch (e) {
    dispatch(setFailed(e.message));
  }
};
