import { getMealsList } from "../../apis";
import { MEAL_IMGS } from "../../constants";
import { TYPES } from "../types";

const setMyMealsList = (payload) => ({
  type: TYPES.MY_MEALS.SET_MY_MEALS_LIST,
  payload,
});

export const getMyMealsList = () => async (dispatch) => {
  try {
    const fakeData = {
      message: "success",
      data: [
        {
          id: 1,
          date: "01-05-2021",
          session: "morning",
        },
        {
          id: 2,
          date: "01-05-2021",
          session: "lunch",
        },
        {
          id: 3,
          date: "01-05-2021",
          session: "dinner",
        },
        {
          id: 4,
          date: "01-05-2021",
          session: "snack",
        },
        {
          id: 5,
          date: "01-05-2021",
          session: "morning",
        },
        {
          id: 6,
          date: "01-05-2021",
          session: "lunch",
        },
        {
          id: 7,
          date: "01-05-2021",
          session: "dinner",
        },
        {
          id: 8,
          date: "01-05-2021",
          session: "snack",
        },
      ],
    };
    // const { data } = await getMealsList();
    // if (data.message === "success") {
    //   // ToDo: replace fakeData once real API available
    //   const fakeData = data.data.map((item, idx) => {
    //     return { ...item, image: MEAL_IMGS[idx] };
    //   });
    //   dispatch({
    //     type: TYPES.MY_MEALS.SET_MY_MEALS_LIST,
    //     payload: fakeData,
    //   });
    // }
    if (fakeData.message === "success") {
      const fakeDataWithImg = fakeData.data.map((data, idx) => ({
        ...data,
        image: MEAL_IMGS[idx],
      }));
      dispatch(setMyMealsList(fakeDataWithImg));
    }
  } catch (err) {
    console.log("err: ", err);
  }
};
