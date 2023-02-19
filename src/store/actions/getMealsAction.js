import { getMealsList } from "../../apis";
import { MEAL_IMGS } from "../../constants";
import { TYPES } from "../types";

const setMyMealsList = (payload) => ({
  type: TYPES.MY_MEALS.SET_MY_MEALS_LIST,
  payload,
});

export const getMyMealsList = () => async (dispatch) => {
  try {
    const { data } = await getMealsList();
    if (data.message === "success") {
      // ToDo: replace fakeData once real API available
      const fakeData = data.data.map((item, idx) => {
        return { ...item, image: MEAL_IMGS[idx] };
      });
      dispatch(setMyMealsList(fakeData));
    }
  } catch (err) {
    console.log("err: ", err);
  }
};
