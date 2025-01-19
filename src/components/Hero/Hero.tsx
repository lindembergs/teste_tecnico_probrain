import lupa from "../../assets/icons/lupa.svg";
import pokeball from "../../assets/icons/pokeball.svg";
import styles from "./Hero.module.css";
import { Input } from "../Input/Input";
import { Filter } from "../Filter/Filter";
export const Hero = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.search_filter_box}>
          <Input placeHolder="Pesquise um pokemon" />
          <button>
            <img src={lupa} alt="Lupa do input de pesquisa" />
          </button>
        </div>
        <Filter></Filter>
      </section>
      <div className={styles.total_pokemons_box}>
        <img src={pokeball} alt="Imagem da pokebola" />
        <span>Total: 150 Pokémons</span>
      </div>
    </>
  );
};
