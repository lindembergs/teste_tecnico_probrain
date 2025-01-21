import styles from "./Main.module.css";
import { Card } from "../Card/Card";

export const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <Card />
      </main>
      <footer></footer>
    </>
  );
};
