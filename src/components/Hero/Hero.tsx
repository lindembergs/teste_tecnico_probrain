import lupa from "../../assets/icons/lupa.svg";
import styles from "./Hero.module.css";
import { Input } from "../Input/Input";
import { Filter } from "../Filter/Filter";
export const Hero = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.search_box}>
          <Input />
          <button>
            <img src={lupa} alt="Lupa do input de pesquisa" />
          </button>
        </div>
        <Filter></Filter>
      </section>
    </>
  );
};
