import { getMealsList, getMyRecord } from "../../apis";
import { TYPES } from "../types";

export const selectChartData = payload => ({
  type: TYPES.SELECT_CHART_DATA,
  payload
})

export const getMyRecordInfo = () => {
  return async dispatch => {
    try {
      const res = await getMyRecord();
      if (res.message === 'success') {
        dispatch({
          type: TYPES.GET_MY_RECORD,
          payload: res.data
        })
      }
    } catch (error) {
      console.log("error: ", error)
    }
  }
}

export const getMyMealsList = () => async dispatch => {
  try {
    const res = await getMealsList();
    if (res.message === 'success') {
      dispatch({
        type: TYPES.GET_MEALS_LIST,
        payload: res.data
      })
    }
  } catch (err) {
    console.log(err)
  }
}