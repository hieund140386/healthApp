import { getMyRecord } from "../../apis";
import { TYPES } from "../types";

const setMyRecord = (payload) => {
  return {
    type: TYPES.MY_RECORD.SET_MY_RECORD,
    payload,
  };
};

export const getMyRecordInfo = () => {
  return async (dispatch) => {
    try {
      const { data } = await getMyRecord();
      if (data.message === "success") {
        dispatch(setMyRecord(data.data.healthInfo));
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
