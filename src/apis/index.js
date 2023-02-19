import axios from "axios";

const BASE_URL = "https://testapi.io/api/hieunguyen1testApi";

export const getMyRecord = async () => {
  return new Promise((resolve, reject) => {
    const fakeRecordData = {
      data: {
        message: "success",
        data: {
          healthInfo: {
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
              originalHealthData: [
                100, 90, 90, 88, 81, 81, 80, 85, 79, 76, 70, 69,
              ],
              recordedHealthData: [
                100, 80, 93, 85, 81, 77, 76, 60, 65, 71, 70, 68,
              ],
            },
          },
        },
      },
    };
    resolve(fakeRecordData);
  });
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
  return new Promise((resolve, reject) => {
    const fakeDiariesList = {
      data: {
        message: "success",
        data: [
          {
            id: 1,
            dateTime: "2021-05-21T23:25",
            title: "私の日記の記録が一部表示されます。",
            content:
              "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          },
          {
            id: 2,
            dateTime: "2021-05-21T23:25",
            title: "私の日記の記録が一部表示されます。",
            content:
              "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          },
          {
            id: 3,
            dateTime: "2021-05-21T23:25",
            title: "私の日記の記録が一部表示されます。",
            content:
              "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          },
          {
            id: 4,
            dateTime: "2021-05-21T23:25",
            title: "私の日記の記録が一部表示されます。",
            content:
              "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          },
          {
            id: 5,
            dateTime: "2021-05-21T23:25",
            title: "私の日記の記録が一部表示されます。",
            content:
              "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          },
          {
            id: 6,
            dateTime: "2021-05-21T23:25",
            title: "私の日記の記録が一部表示されます。",
            content:
              "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          },
          {
            id: 7,
            dateTime: "2021-05-21T23:25",
            title: "私の日記の記録が一部表示されます。",
            content:
              "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          },
          {
            id: 8,
            dateTime: "2021-05-21T23:25",
            title: "私の日記の記録が一部表示されます。",
            content:
              "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
          },
        ],
      },
    };
    resolve(fakeDiariesList);
  });
  return axios.get(`${BASE_URL}/my-diary`);
};

export const getColumnsList = async () => {
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
