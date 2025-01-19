import styles from "./Input.module.css";
interface InputProps {
  placeHolder?: string;
}
export const Input = ({ placeHolder }: InputProps) => {
  return (
    <input className={styles.input} type="text" placeholder={placeHolder} />
  );
};
