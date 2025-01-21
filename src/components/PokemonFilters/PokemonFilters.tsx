import { PokemonFiltersProps } from "../../types/pokemon";
import styles from "./PokemonFilters.module.css";
// import searchIcon from "../../assets/icons/search.svg";

import filterIcon from "../../assets/icons/filter.svg";
import SearchIcon from "@mui/icons-material/Search";
export const PokemonFilters = ({
  searchTerm,
  selectedType,
  onSearchChange,
  onTypeChange,
}: PokemonFiltersProps) => (
  <div className={styles.filters}>
    <div className={styles.search_box}>
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button>
        <SearchIcon />
      </button>
    </div>
    <div className={styles.filter_box}>
      <img src={filterIcon} alt="icone da sessão de filtro" />
      <strong>Filtrar por:</strong>
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">Todos os tipos</option>
        <option value="Fire">Fogo</option>
        <option value="Water">Água</option>
        <option value="Grass">Grama</option>
        <option value="Lightning">Elétrico</option>
      </select>
    </div>
  </div>
);
