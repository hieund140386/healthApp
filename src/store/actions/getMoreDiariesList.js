import { TYPES } from "../types";
import { getMoreDiaries as getMoreDiariesAPI } from "../../apis";

export const getMoreDiaries = () => async (dispatch) => {
  try {
    // ToDo: replace fakeMoreDiaries once real API available
    const { data } = await getMoreDiariesAPI();
    if (data.message === "success") {
      dispatch({
        type: TYPES.DIARY.LOAD_MORE_DIARY,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
