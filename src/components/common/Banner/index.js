import Chart from "../Chart";
import classes from "./Banner.module.scss";
import BannerImg from "../../../assets/images/main_photo.png";

export default function Banner({ data }) {
  const { datasets, duration, progressPercent } = data;
  return (
    <div className={classes.banner}>
      <img src={BannerImg} alt="banner-img" />
      <Chart
        id="canvas1"
        datasets={{
          data1: datasets.originalHealthData,
          data2: datasets.recordedHealthData,
        }}
        labels={duration}
        isDetail={true}
        duration="21.05.2021"
      />
    </div>
  );
}
