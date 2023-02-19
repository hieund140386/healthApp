import { useCallback, useEffect } from "react";
import Banner from "../../components/common/Banner";
import classes from "./TopPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMyRecordInfo } from "../../store/actions";
import knifeForkImg from "../../assets/images/fork-knife.svg";
import rubbishBin from "../../assets/images/rubbish-bin.svg";
import HexShape from "../../components/common/HexShape";
import actions from "../../store/actions";
import MealItem from "../../components/common/MealItem";
import Button from "../../components/common/Button";
import BackToTop from "../../components/common/BackToTop";

const HEX_SHAPES = [
  {
    title: "morning",
    img: knifeForkImg,
  },
  {
    title: "lunch",
    img: knifeForkImg,
  },
  {
    title: "dinner",
    img: knifeForkImg,
  },
  {
    title: "snack",
    img: rubbishBin,
  },
];

export default function TopPage() {
  document.title = "Top";

  const myRecord = useSelector((state) => state.myRecord);
  const { mealsList } = useSelector((state) => state.myMealsList);
  const dispatch = useDispatch();

  const handleOnLoadMore = useCallback(() => {
    dispatch(actions.getMoreMeals());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actions.getMyRecordInfo());
    dispatch(actions.getMyMealsList());
  }, []);

  return (
    <div className={classes["top-page"]}>
      <Banner data={myRecord} />
      <div className={classes["hex-shapes-list"]}>
        {HEX_SHAPES.map((shape) => (
          <HexShape
            key={shape.title}
            imgSrc={shape.img}
            imgAlt={shape.title}
            title={shape.title}
          />
        ))}
      </div>
      <div className={classes["meals-list"]}>
        {mealsList.map((meal) => (
          <MealItem
            key={meal.id}
            imgSrc={meal.image}
            date={meal.date}
            time={meal.session}
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
