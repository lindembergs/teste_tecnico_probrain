import lupa from "../../assets/icons/lupa.svg";
import { Input } from "../Input/Input";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <>
      <section className="container">
        <div className={styles.search_box}>
          <Input />
          <button>
            <img src={lupa} alt="Lupa do input de pesquisa" />
          </button>
        </div>
      </section>
    </>
  );
};
