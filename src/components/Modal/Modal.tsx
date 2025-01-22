import styles from "./Modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { ModalProps } from "../../types/pokemon";
import pokeball from "../../assets/icons/pokeball.svg";

export const Modal = ({ pokemon, onClose }: ModalProps) => {
  if (!pokemon) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <span>
            {pokemon.name || "Desconhecido"}
            {pokemon.level && <small> Nv.{pokemon.level}</small>}
          </span>
          <button onClick={onClose} className={styles.close_button}>
            <CloseIcon style={{ color: "#666666" }} />
          </button>
        </header>
        <main className={styles.main}>
          <img
            className={styles.pokemon_img}
            src={pokemon.images.large}
            alt={`Imagem de ${pokemon.name}`}
          />
          <div className={styles.info_box}>
            <div className={styles.type_rarity_box}>
              <span>
                <strong>Tipo:</strong> {pokemon.types?.join(", ") || "Sem tipo"}
              </span>
              <span>
                <strong>Evolui de: </strong>
                {pokemon.evolvesFrom || "Pokémon Básico"}
              </span>
            </div>
            <div className={styles.box_in_row}>
              <div className={styles.info_box_column}>
                <div className={styles.info_box_row}>
                  <img src={pokeball} alt="HP Icon" />
                  <strong>HP:</strong>
                </div>
                <span>{pokemon.hp || "?"}</span>
              </div>
              <div className={styles.info_box_column_middle}>
                <div className={styles.info_box_row}>
                  <img src={pokeball} alt="Attack Icon" />
                  <strong>Ataque:</strong>
                </div>
                <span>
                  {pokemon.attacks?.[0]?.name || "Sem ataque"}
                  {pokemon.attacks?.[0]?.damage &&
                    ` (${pokemon.attacks[0].damage})`}
                </span>
              </div>
              <div className={styles.info_box_column}>
                <div className={styles.info_box_row}>
                  <img src={pokeball} alt="Weakness Icon" />
                  <strong>Fraqueza:</strong>
                </div>
                <span>
                  {pokemon.weaknesses?.[0]?.type}{" "}
                  {pokemon.weaknesses?.[0]?.value || "Nenhuma"}
                </span>
              </div>
            </div>
            <div className={styles.abilities_box}>
              {pokemon.abilities?.[0] && (
                <>
                  <strong>
                    {pokemon.abilities[0].type}: {pokemon.abilities[0].name}
                  </strong>
                  <p>{pokemon.abilities[0].text}</p>
                </>
              )}
            </div>
          </div>
          <strong>Artista: {pokemon.artist}</strong>
          <div className={styles.gray_bar}></div>
        </main>
      </div>
    </section>
  );
};
