import { getChartData } from "../../apis";
import { TYPES } from "../types";

export const selectChartData = (payload) => ({
  type: TYPES.CHART.CHANGE_CHART_DATA,
  payload,
});

export const changeChartData = (payload) => async (dispatch) => {
  try {
    const res = await getChartData(payload);
    dispatch(selectChartData(res));
  } catch (error) {
    console.log("error: ", error);
  }
};
