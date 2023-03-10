import classes from "./Layout.module.scss";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}
