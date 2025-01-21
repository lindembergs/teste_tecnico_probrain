import { PokemonFiltersProps } from "../../types/pokemon";
import styles from "./PokemonFilters.module.css";
import FilterListIcon from "@mui/icons-material/FilterList";

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
      <FilterListIcon style={{ fontSize: "40px", color: "#d4d7de" }} />
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
