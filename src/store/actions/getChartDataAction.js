import { getChartData as getChartDataAPI } from "../../apis";
import { TYPES } from "../types";

export const selectChartData = (payload) => ({
  type: TYPES.CHART.SET_CHART_DATA,
  payload,
});

export const getChartData = (payload) => async (dispatch) => {
  try {
    const res = await getChartDataAPI(payload);
    dispatch(selectChartData(res));
  } catch (error) {
    console.log("error: ", error);
  }
};
