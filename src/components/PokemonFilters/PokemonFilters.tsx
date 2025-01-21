import styles from "./PokemonFilters.module.css";

interface PokemonFiltersProps {
  searchTerm: string;
  selectedType: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

export const PokemonFilters = ({
  searchTerm,
  selectedType,
  onSearchChange,
  onTypeChange,
}: PokemonFiltersProps) => (
  <div className={styles.filters}>
    <input
      type="text"
      placeholder="Pesquisar por nome"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
      <option value="">Todos os tipos</option>
      <option value="Fire">Fogo</option>
      <option value="Water">Água</option>
      <option value="Grass">Grama</option>
      <option value="Lightning">Elétrico</option>
    </select>
  </div>
);
