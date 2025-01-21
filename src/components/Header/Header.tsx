import logo from "../../assets/img/logo.svg";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Logo com o nome Pokémon" />
        <a href="https://docs.pokemontcg.io/" target="_blank">
          Documentação
        </a>
      </div>
    </header>
  );
};
