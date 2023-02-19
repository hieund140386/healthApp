import { TYPES } from "../types";

const initialMyDiariesListState = {
  diariesList: [],
};

export default function diaryListReducer(
  state = initialMyDiariesListState,
  action
) {
  switch (action.type) {
    case TYPES.DIARY.GET_DIARY_DATA:
      return { ...state, diariesList: action.payload };
    case TYPES.DIARY.LOAD_MORE_DIARY:
      return {
        ...state,
        diariesList: [...state.diariesList, ...action.payload],
      };
    default:
      return state;
  }
}
