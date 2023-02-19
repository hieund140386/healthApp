import Chart from "../Chart";
import classes from "./Banner.module.scss";
import BannerImg from "../../../assets/images/main_photo.png";
import ProgressPercent from "../ProgressPercent";

export default function Banner({ data }) {
  const { datasets, duration, progress } = data;
  return (
    <div className={classes.banner}>
      <div className={classes["progress-img"]}>
        <img src={BannerImg} alt="banner-img" />
        <ProgressPercent value={progress.value} date={progress.date} />
      </div>
      <Chart
        id="canvas1"
        datasets={{
          data1: datasets.originalHealthData,
          data2: datasets.recordedHealthData,
        }}
        labels={duration}
        isDetail={false}
        duration="21.05.2021"
        height={312}
      />
    </div>
  );
}
