import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          <li>
            <Link to="#">会員登録</Link>
          </li>
          <li>
            <Link to="#">運営会社</Link>
          </li>
          <li>
            <Link to="#">利用規約</Link>
          </li>
          <li>
            <Link to="#">個人情報の取扱について</Link>
          </li>
          <li>
            <Link to="#">特定商取引法に基づく表記</Link>
          </li>
          <li>
            <Link to="#">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
