import styles from "./Filter.module.css";
import filter from "../../assets/icons/filter.svg";
import { Input } from "../Input/Input";
export const Filter = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.filter_box}>
          <img src={filter} />
          <span>Filtrar por:</span>
          <Input></Input>
        </div>
      </div>
    </>
  );
};
