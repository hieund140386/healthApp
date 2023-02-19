import { TYPES } from "../types";

const initialColumnState = {
  columnsList: [],
};

export default function columnReducer(state = initialColumnState, action) {
  switch (action.type) {
    case TYPES.COLUMNS.GET_COLUMNS_DATA:
    case TYPES.COLUMNS.LOAD_MORE_COLUMNS:
      return {
        ...state,
        columnsList: [...state.columnsList, ...action.payload],
      };
    default:
      return state;
  }
}
