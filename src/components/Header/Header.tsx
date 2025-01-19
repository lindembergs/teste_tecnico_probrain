import logo from "../../assets/img/logo.svg";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo com o nome Pokémon" />
      <span>Documentação</span>
    </header>
  );
};
