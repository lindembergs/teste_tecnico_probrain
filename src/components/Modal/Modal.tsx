import styles from "./Modal.module.css";
import xIcon from "../../assets/icons/x_close.svg";

interface ModalProps {
  pokemon: {
    name: string;
    images: { large: string };
    types?: string[];
    rarity: string;
    flavorText?: string;
    hp?: string;
  };
  onClose: () => void;
}

export const Modal = ({ pokemon, onClose }: ModalProps) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span>{pokemon.name || "Desconhecido"}</span>
            <button onClick={onClose}>
              <img src={xIcon} alt="Botão de fechar" />
            </button>
          </header>
          <main className={styles.main}>
            <img
              className={styles.pokemon_img}
              src={pokemon.images.large}
              alt={`Imagem de ${pokemon.name}`}
            />
            <div className={styles.info}>
              <span>
                <strong>Tipo:</strong> {pokemon.types?.join(", ") || "Sem tipo"}
              </span>
              <span>
                <strong>Raridade:</strong> {pokemon.rarity || "Sem raridade"}
              </span>
              <span>
                <strong>HP:</strong> {pokemon.hp || "Sem HP"}
              </span>
              <p>{pokemon.flavorText || "Sem descrição disponível."}</p>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};
