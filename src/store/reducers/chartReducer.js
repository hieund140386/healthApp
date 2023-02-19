import { TYPES } from "../types";

const initialChartState = {
  selectedChartData: "年",
  duration: [],
  datasets: {
    originalHealthData: [],
    recordedHealthData: [],
  },
};
export default function chartReducer(state = initialChartState, action) {
  switch (action.type) {
    case TYPES.CHART.SET_CHART_DATA:
    case TYPES.CHART.CHANGE_CHART_DATA:
      return {
        ...state,
        selectedChartData: action.payload.selectedChartData,
        duration: action.payload.duration,
        datasets: action.payload.datasets,
      };
    default:
      return state;
  }
}
