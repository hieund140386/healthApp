import { changeChartData } from "./getChartAction";
import { getMyRecordInfo } from "./getRecordAction";
import { getMyMealsList } from "./getMealsAction";
import { getMoreMeals } from "./getMoreMealsAction";
import { getChartData } from "./getChartDataAction";
import { getDiariesList } from "./getDiariesListAction";
import { getMoreDiaries } from "./getMoreDiariesList";
import { getColumnsList } from "./getColumnsListAction";
import { getMoreColumns } from "./getMoreColumns";

const actions = {
  changeChartData,
  getMyMealsList,
  getMyRecordInfo,
  getMoreMeals,
  getChartData,
  getDiariesList,
  getColumnsList,
  getMoreDiaries,
  getMoreColumns,
};

export default actions;
