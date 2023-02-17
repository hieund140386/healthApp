import { useCallback, useEffect, useState } from "react";
import { getMyRecord } from "../../apis";
import Banner from "../../components/common/Banner";
import classes from "./TopPage.module.scss";

export default function TopPage(props) {
  document.title = "Top";

  const [myRecordData, setMyRecordData] = useState({
    duration: [],
    progressPercent: 0,
    datasets: {
      originalHealthData: [],
      recordedHealthData: [],
    },
  });

  const getMyRecordData = useCallback(async () => {
    const res = await getMyRecord();
    if (res.message === 'success') {
      const { data } = res;
      const { healthInfo } = data;
      setMyRecordData(healthInfo)
    }
  }, []);

  useEffect(() => {
    getMyRecordData();
  }, []);

  return (
    <div className={classes["top-page"]}>
      <Banner data={myRecordData} />
    </div>
  );
}
