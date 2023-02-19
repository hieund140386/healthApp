import { TYPES } from "../types";

export const getMoreDiaries = () => async (dispatch) => {
  try {
    // ToDo: replace fakeMoreDiaries once real API available
    const fakeMoreDiaries = {
      message: "success",
      data: [
        {
          id: 9,
          dateTime: "2021-05-21T23:25",
          title: "私の日記の記録が一部表示されます。",
          content:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
        {
          id: 10,
          dateTime: "2021-05-21T23:25",
          title: "私の日記の記録が一部表示されます。",
          content:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
        {
          id: 11,
          dateTime: "2021-05-21T23:25",
          title: "私の日記の記録が一部表示されます。",
          content:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
        {
          id: 12,
          dateTime: "2021-05-21T23:25",
          title: "私の日記の記録が一部表示されます。",
          content:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
        {
          id: 13,
          dateTime: "2021-05-21T23:25",
          title: "私の日記の記録が一部表示されます。",
          content:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
        {
          id: 14,
          dateTime: "2021-05-21T23:25",
          title: "私の日記の記録が一部表示されます。",
          content:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
        {
          id: 15,
          dateTime: "2021-05-21T23:25",
          title: "私の日記の記録が一部表示されます。",
          content:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
        {
          id: 16,
          dateTime: "2021-05-21T23:25",
          title: "私の日記の記録が一部表示されます。",
          content:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
        },
      ],
    };
    if (fakeMoreDiaries.message === "success") {
      dispatch({
        type: TYPES.DIARY.LOAD_MORE_DIARY,
        payload: fakeMoreDiaries.data,
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
