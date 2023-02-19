import { TYPES } from "../types";

const initialMyMealsListState = {
  mealsList: [],
};

export default function myMealsListReducer(
  state = initialMyMealsListState,
  action
) {
  switch (action.type) {
    case TYPES.MY_MEALS.SET_MY_MEALS_LIST:
      return { ...state, mealsList: action.payload };
    case TYPES.MY_MEALS.LOAD_MORE_MEALS:
      return {
        ...state,
        mealsList: [...state.mealsList, ...action.payload],
      };
    default:
      return state;
  }
}
