import styles from "./Filter.module.css";
import filter from "../../assets/icons/filter.svg";
export const Filter = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={filter} alt="" />
        </div>
      </div>
    </>
  );
};
