import styles from "./Modal.module.css";
import xIcon from "../../assets/icons/x_close.svg";
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
        </div>
      </section>
    </div>
  );
};
