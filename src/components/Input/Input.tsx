import styles from "./Input.module.css";
export const Input = () => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Pesquise por um pokemon"
    />
  );
};
