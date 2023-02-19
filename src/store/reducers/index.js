import { combineReducers } from "redux";
import chartReducer from "./chartReducer";
import columnReducer from "./columnReducer";
import diaryListReducer from "./diaryReducer";
import myMealsListReducer from "./mealsListReducer";
import myRecordReducer from "./myRecordReducer";

const rootReducer = combineReducers({
  chart: chartReducer,
  myRecord: myRecordReducer,
  myMealsList: myMealsListReducer,
  diary: diaryListReducer,
  column: columnReducer,
});

export default rootReducer;
