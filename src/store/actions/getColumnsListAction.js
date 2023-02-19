import { TYPES } from "../types";
import { getColumnsList as getColumnsListAPI } from "../../apis";
import { ARTICLES_IMAGES_LIST } from "../../constants";

export const getColumnsList = () => async (dispatch) => {
  try {
    const { data } = await getColumnsListAPI();
    if (data.message === "success") {
      const dataWithImg = data.data.map((item, idx) => ({
        ...item,
        image: ARTICLES_IMAGES_LIST[idx],
      }));
      dispatch({
        type: TYPES.COLUMNS.GET_COLUMNS_DATA,
        payload: dataWithImg,
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
