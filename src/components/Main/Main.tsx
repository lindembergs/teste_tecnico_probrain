import { Card } from "../Card/Card";
import { Modal } from "./../Modal/Modal";
import styles from "./Main.module.css";
export const Main = () => {
  return (
    <main className={styles.main}>
      <Card></Card>
      <Modal></Modal>
    </main>
  );
};
