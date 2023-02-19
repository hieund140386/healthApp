import { getMoreColumnsList } from "../../apis";
import { ARTICLES_IMAGES_LIST } from "../../constants";
import { TYPES } from "../types";

export const getMoreColumns = () => async (dispatch) => {
  try {
    const { data } = await getMoreColumnsList();
    if (data.message === "success") {
      const dataWithImg = data.data.map((item, idx) => ({
        ...item,
        image: ARTICLES_IMAGES_LIST[idx],
      }));
      dispatch({
        type: TYPES.COLUMNS.LOAD_MORE_COLUMNS,
        payload: dataWithImg,
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
