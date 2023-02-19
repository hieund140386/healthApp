import React, { useCallback, useEffect } from "react";
import Column from "../../components/common/Column";
import { COLUMNS_LIST } from "../../constants";
import classes from "./MyColumn.module.scss";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/actions";
import CardFull from "../../components/common/Card/CardFull";
import Button from "../../components/common/Button";
import BackToTop from "../../components/common/BackToTop";

export default function MyColumnPage() {
  document.title = "コラム";
  const dispatch = useDispatch();
  const { columnsList } = useSelector((state) => state.column);

  const handleOnLoadMore = useCallback(() => {
    dispatch(actions.getMoreColumns());
  }, []);

  useEffect(() => {
    dispatch(actions.getColumnsList());
  }, []);

  return (
    <div>
      <div className={classes["column-list"]}>
        {COLUMNS_LIST.map((col) => (
          <Column
            key={col.text}
            text={col.text}
            type={col.type}
            title={col.title}
          />
        ))}
      </div>
      <div className={classes["articles-list"]}>
        {columnsList.map((item) => (
          <CardFull
            key={item.id}
            dateTime={item.dateTime}
            content={item.content}
            foodType={item.food}
            imgSrc={item.image}
          />
        ))}
      </div>
      <div className={classes.button}>
        <Button onClick={handleOnLoadMore} />
      </div>
      <BackToTop />
    </div>
  );
}
