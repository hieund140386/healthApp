import axios from "axios";

const BASE_URL = "https://testapi.io/api/hieunguyen1testApi";

export const getMyRecord = async () => {
  return axios.get(`${BASE_URL}/my-record`);
};

export const getChartData = async (chartDataType) =>
  new Promise((resolve, reject) => {
    const fakeChartData = {
      duration: [
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
      ],
      datasets: {
        originalHealthData: [100, 90, 90, 88, 81, 81, 80, 85, 79, 76, 70, 69],
        recordedHealthData: [100, 80, 93, 85, 81, 77, 76, 60, 65, 71, 70, 68],
      },
    };
    let _chartDataType = "";
    switch (chartDataType) {
      case "dateTime":
        _chartDataType = "日";
        break;
      case "week":
        _chartDataType = "週";
        break;
      case "month":
        _chartDataType = "月";
        break;
      default:
        _chartDataType = "年";
    }
    setTimeout(
      () => resolve({ selectedChartData: _chartDataType, ...fakeChartData }),
      1000
    );
  });

export const getMealsList = async () => axios.get(`${BASE_URL}/my-meals`);

export const getDiariesList = async () => {
  return axios.get(`${BASE_URL}/my-diary`);
};

export const getColumnsList = async () => {
  return axios.get(`${BASE_URL}/my-column`);
};

export const getMoreColumnsList = async () => {
  const fakeColumnsList = {
    data: {
      message: "success",
      data: [
        {
          id: 1,
          dateTime: "2021-05-21T23:25",
          content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          food: ["魚料理", "和食", "DHA"],
        },
        {
          id: 2,
          dateTime: "2021-05-21T23:25",
          content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          food: ["魚料理", "和食", "DHA"],
        },
        {
          id: 3,
          dateTime: "2021-05-21T23:25",
          content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          food: ["魚料理", "和食", "DHA"],
        },
        {
          id: 4,
          dateTime: "2021-05-21T23:25",
          content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          food: ["魚料理", "和食", "DHA"],
        },
        {
          id: 5,
          dateTime: "2021-05-21T23:25",
          content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          food: ["魚料理", "和食", "DHA"],
        },
        {
          id: 6,
          dateTime: "2021-05-21T23:25",
          content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          food: ["魚料理", "和食", "DHA"],
        },
        {
          id: 7,
          dateTime: "2021-05-21T23:25",
          content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          food: ["魚料理", "和食", "DHA"],
        },
        {
          id: 8,
          dateTime: "2021-05-21T23:25",
          content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
          food: ["魚料理", "和食", "DHA"],
        },
      ],
    },
  };
  return new Promise((resolve, reject) => {
    resolve(fakeColumnsList);
  });
};

export const getMoreDiaries = async () => {
  const fakeMoreDiaries = {
    data: {
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
    },
  };
  return new Promise((resolve, reject) => {
    resolve(fakeMoreDiaries);
  });
};

export const getMoreMeals = async () => {
  const fakeMoreMeals = {
    data: {
      message: "success",
      data: [
        {
          id: 9,
          date: "01-05-2021",
          session: "morning",
        },
        {
          id: 10,
          date: "01-05-2021",
          session: "lunch",
        },
        {
          id: 11,
          date: "01-05-2021",
          session: "dinner",
        },
        {
          id: 12,
          date: "01-05-2021",
          session: "snack",
        },
        {
          id: 13,
          date: "01-05-2021",
          session: "morning",
        },
        {
          id: 14,
          date: "01-05-2021",
          session: "lunch",
        },
        {
          id: 15,
          date: "01-05-2021",
          session: "dinner",
        },
        {
          id: 16,
          date: "01-05-2021",
          session: "snack",
        },
      ],
    },
  };
  return new Promise((resolve, reject) => {
    resolve(fakeMoreMeals);
  });
};
