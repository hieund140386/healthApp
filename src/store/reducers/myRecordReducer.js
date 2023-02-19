import { TYPES } from "../types";

const initialMyRecordState = {
  duration: [],
  progress: {
    value: 0,
    date: null,
  },
  datasets: {
    originalHealthData: [],
    recordedHealthData: [],
  },
};

export default function myRecordReducer(state = initialMyRecordState, action) {
  switch (action.type) {
    case TYPES.MY_RECORD.SET_MY_RECORD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
