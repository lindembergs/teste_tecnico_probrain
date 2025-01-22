import { usePokemonData } from "../../hooks/usePokemonData";
import { PokemonFiltersProps } from "../../types/pokemon";
import styles from "./PokemonFilters.module.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

export const PokemonFilters = ({
  searchTerm,
  selectedType,
  onSearchChange,
  onTypeChange,
}: PokemonFiltersProps) => {
  const { data, isLoading, error } = usePokemonData();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro ao carregar os dados.</div>;
  }

  // Obtenha uma lista única de tipos
  const uniqueTypes = data
    ? Array.from(new Set(data.flatMap((pokemon) => pokemon.types)))
    : [];

  return (
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
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
