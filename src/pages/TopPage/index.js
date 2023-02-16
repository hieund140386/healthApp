import { useCallback, useEffect, useState } from "react";
import { getMyRecord } from "../../apis";
import Banner from "../../components/common/Banner";
import classes from "./TopPage.module.scss";

export default function TopPage(props) {
  document.title = "Top";

  const [myRecordData, setMyRecordData] = useState({
    duration: [],
    progressPercent: 0,
    data: {
      originalHealthData: [],
      recordedHealthData: [],
    },
  });

  const getMyRecordData = useCallback(async () => {
    const { data } = await getMyRecord();
    const { healthData } = data;
    setMyRecordData((prev) => healthData);
  }, []);

  useEffect(() => {
    getMyRecordData();
  }, []);
  console.log("effect");

  return (
    <div className={classes["top-page"]}>
      <Banner data={myRecordData} />
    </div>
  );
}
