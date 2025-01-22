import styles from "./PokemonCard.module.css";
import typeImg from "../../assets/icons/type_img.svg";
import { Pokemon } from "../../types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

export const PokemonCard = ({ pokemon, onClick }: PokemonCardProps) => (
  <div className={styles.card} onClick={() => onClick(pokemon)}>
    <img
      src={pokemon.images.large}
      alt={`Imagem do Pokémon ${pokemon.name}`}
      className={styles.cardImage}
    />
    <div className={styles.name_box}>
      <strong>{pokemon.name || "Desconhecido"}</strong>
      <img src={typeImg} alt="Tipo do Pokémon" />
    </div>
    <div className={styles.type_box}>
      <span>{pokemon.types?.join(", ") || "Sem tipo"}</span>
      <span>{pokemon.rarity || "Sem raridade"}</span>
    </div>
  </div>
);
