import { combineReducers } from "redux";
import { TYPES } from "../types";

const initialSelectedChartDataState = {
  selectedChartData: 'year',
}

function chartDataReducer (state = initialSelectedChartDataState, action) {
  switch (action.type) {
    case TYPES.SELECT_CHART_DATA:
      return {
        ...state,
        selectedChartData: action.payload
      }
    default:
      return state;
  }
}

const initialMyRecordState = {
  duration: [],
  progressPercent: 0,
  datasets: {
    originalHealthData: [],
    recordedHealthData: [],
  },
}

function getMyRecord (state = initialMyRecordState, action) {
  switch (action.type) {
    case TYPES.GET_MY_RECORD:
      return { ...state, ...action.payload}
    default:
      return state;
  }
}

const initialMyMealsListState = {
  mealsList: []
}

function getMyMealsList (state = initialMyMealsListState, action) {
  switch (action.type) {
    case TYPES.GET_MY_RECORD:
      return { ...state, ...action.payload}
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  chartDataReducer,
  getMyRecord,
  getMyMealsList,
})

export default rootReducer;