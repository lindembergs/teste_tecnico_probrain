import { useState } from "react";
import styles from "./Card.module.css";
import { CustomPagination } from "../CustomPagination/CustomPagination";
import { Modal } from "../Modal/Modal";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { PokemonFilters } from "../PokemonFilters/PokemonFilters";
import { usePokemonData } from "../../hooks/usePokemonData";
import { usePokemonFilters } from "../../hooks/usePokemonFilters";
import { Pokemon } from "../../types/pokemon";
import pokeball from "../../assets/icons/pokeball.svg";

const ITEMS_PER_PAGE = 24;

export const Card = () => {
  const { data, isLoading, error } = usePokemonData();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    currentItems,
    totalPages,
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
  } = usePokemonFilters({ data, itemsPerPage: ITEMS_PER_PAGE });

  const openModal = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <PokemonFilters
        searchTerm={searchTerm}
        selectedType={selectedType}
        onSearchChange={setSearchTerm}
        onTypeChange={setSelectedType}
      />
      <div className={styles.totalPokemons}>
        <img src={pokeball} alt="" />
        <strong>total de pokemons: {data.length}</strong>
      </div>

      <div className={styles.cardsContainer}>
        {currentItems.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={openModal} />
        ))}
      </div>

      {isModalOpen && selectedPokemon && (
        <Modal pokemon={selectedPokemon} onClose={closeModal} />
      )}

      <div className={styles.paginationContainer}>
        <CustomPagination
          count={totalPages}
          page={currentPage}
          onChange={(_, value) => setCurrentPage(value)}
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
};
