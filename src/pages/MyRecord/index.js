import React, { useCallback, useEffect } from "react";
import Card from "../../components/common/Card";
import classes from "./MyRecord.module.scss";
import { SUB_MENUS_LIST } from "../../constants";
import Chart from "../../components/common/Chart";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/actions";
import BackToTop from "../../components/common/BackToTop";
import Button from "../../components/common/Button";
import CardText from "../../components/common/Card/CardText";

export default function MyRecordPage() {
  document.title = "自分の記録";
  const dispatch = useDispatch();

  const { datasets, duration } = useSelector((state) => state.chart);
  const { diariesList } = useSelector((state) => state.diary);
  const handleOnLoadMore = useCallback(() => {
    dispatch(actions.getMoreDiaries());
  }, []);

  useEffect(() => {
    dispatch(actions.getChartData());
    dispatch(actions.getDiariesList());
  }, []);

  return (
    <div className={classes["my-record"]}>
      <div className={classes["sub-menus-list"]}>
        {SUB_MENUS_LIST.map((item) => (
          <Card
            key={item.type}
            type={item.type}
            title={item.title}
            imgSrc={item.image}
          />
        ))}
      </div>
      <div className={classes["chart"]}>
        <Chart
          id="canvas2"
          datasets={{
            data1: datasets.originalHealthData,
            data2: datasets.recordedHealthData,
          }}
          labels={duration}
          isDetail={true}
          duration="21.05.2021"
          options={{
            layout: {
              padding: {
                left: 54,
                top: 54,
                right: 54,
                bottom: 65,
              },
            },
          }}
        />
      </div>
      <section className={classes.diary}>
        <p className={classes.title}>MY DIARY</p>
        <div className={classes["diaries-list"]}>
          {diariesList.map((diary) => (
            <CardText
              key={diary.id}
              dateTime={diary.dateTime}
              content={diary.content}
              title={diary.title}
            />
          ))}
        </div>
      </section>
      <div className={classes.button}>
        <Button onClick={handleOnLoadMore} />
      </div>
      <BackToTop />
    </div>
  );
}
