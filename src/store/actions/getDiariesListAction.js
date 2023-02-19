import { getDiariesList as getDiariesListAPI } from "../../apis";
import { TYPES } from "../types";

export const getDiary = (payload) => ({
  type: TYPES.DIARY.GET_DIARY_DATA,
  payload,
});

export const getDiariesList = () => async (dispatch) => {
  try {
    const { data } = await getDiariesListAPI();
    if (data.message === "success") {
      dispatch(getDiary(data.data));
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
