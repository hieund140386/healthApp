import Chart from "../Chart";
import classes from "./Banner.module.scss";
import BannerImg from "../../../assets/images/main_photo.png";

export default function Banner(props) {
  console.log("data: ", props.data);
  // const { duration, progressPercent, data: datasets } = data;
  return (
    <div className={classes.banner}>
      <img src={BannerImg} alt="banner-img" />
      {/* <Chart
        id="canvas1"
        datasets={{
          data1: datasets.originalHealthData,
          data2: datasets.recordedHealthData,
        }}
        labels={duration}
        progressPercent={progressPercent}
      /> */}
    </div>
  );
}
