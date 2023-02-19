import { MEAL_IMGS } from "../../constants";
import { TYPES } from "../types";
import { getMoreMeals as getMoreMealsAPI } from "../../apis";

export const getMoreMeals = () => async (dispatch) => {
  try {
    // ToDo: replace fakeMoreMeals once real API available
    const { data } = await getMoreMealsAPI();
    if (data.message === "success") {
      const dataWithImg = data.data.map((meal, idx) => ({
        ...meal,
        image: MEAL_IMGS[idx],
      }));
      dispatch({
        type: TYPES.MY_MEALS.LOAD_MORE_MEALS,
        payload: dataWithImg,
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
