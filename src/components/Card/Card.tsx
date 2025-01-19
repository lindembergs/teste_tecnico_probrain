import styles from "./Card.module.css";
import pokemonImg from "../../assets/img/temp_img.svg";
import typeImg from "../../assets/icons/type_img.svg";
export const Card = () => {
  return (
    <div className={styles.card}>
      <img src={pokemonImg} alt="Imagem do pokemon no card" />
      <div className={styles.name_box}>
        <span>Bubasaur</span>
        <img src={typeImg} alt="" />
      </div>
      <div className={styles.type_box}>
        <span>Tipo planta</span>
        <span>Comum</span>
      </div>
    </div>
  );
};
