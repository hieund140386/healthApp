import { MEAL_IMGS } from "../../constants";
import { TYPES } from "../types";

export const getMoreMeals = () => async (dispatch) => {
  try {
    // ToDo: replace fakeMoreMeals once real API available
    const fakeMoreMeals = {
      message: "success",
      data: [
        {
          id: 9,
          date: "01-05-2021",
          session: "morning",
        },
        {
          id: 10,
          date: "01-05-2021",
          session: "lunch",
        },
        {
          id: 11,
          date: "01-05-2021",
          session: "dinner",
        },
        {
          id: 12,
          date: "01-05-2021",
          session: "snack",
        },
        {
          id: 13,
          date: "01-05-2021",
          session: "morning",
        },
        {
          id: 14,
          date: "01-05-2021",
          session: "lunch",
        },
        {
          id: 15,
          date: "01-05-2021",
          session: "dinner",
        },
        {
          id: 16,
          date: "01-05-2021",
          session: "snack",
        },
      ],
    };
    if (fakeMoreMeals.message === "success") {
      const fakeMoreMealsWithImg = fakeMoreMeals.data.map((meal, idx) => ({
        ...meal,
        image: MEAL_IMGS[idx],
      }));
      dispatch({
        type: TYPES.MY_MEALS.LOAD_MORE_MEALS,
        payload: fakeMoreMealsWithImg,
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
