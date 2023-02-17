import Badge from ".";
import classes from "./BadgesList.module.scss";

export default function BadgesList({badgesList}) {
  if (!badgesList.length) return null;
  return <div className={classes['badges-list']}>
    {badgesList.map(badge => <Badge key={badge.title} onClick={badge.onClick}>{badge.title}</Badge>)}
  </div>
}