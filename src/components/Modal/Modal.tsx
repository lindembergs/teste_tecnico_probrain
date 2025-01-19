import styles from "./Modal.module.css";
import xIcon from "../../assets/icons/x_close.svg";
import img from "../../assets/img/temp_img.svg";
import pokeball from "../../assets/icons/pokeball.svg";
export const Modal = () => {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span>Pokemon Name</span>
            <button>
              <img src={xIcon} alt="Botão de fechar" />
            </button>
          </header>
          <main className={styles.main}>
            <img className={styles.pokemon_img} src={img} alt="" />
            <div className={styles.middle_box}>
              <span>1</span>
              <span>2</span>
            </div>
            <div className={styles.info_boxes}>
              <div className={styles.info_box}>
                <strong>
                  <img className={styles.img} src={pokeball} alt="" />
                  info
                </strong>
                <span>lorem ipsum</span>
              </div>
              <div className={styles.info_box_with_border}>
                <strong>
                  <img className={styles.img} src={pokeball} alt="" />
                  info
                </strong>
                <span>lorem ipsum</span>
              </div>
              <div className={styles.info_box}>
                <strong>
                  <img className={styles.img} src={pokeball} alt="" />
                  info
                </strong>
                <span>lorem ipsum</span>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};
