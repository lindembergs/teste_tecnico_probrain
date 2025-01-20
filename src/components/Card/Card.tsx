import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import typeImg from "../../assets/icons/type_img.svg";
import { api } from "../../services/api";
import { Modal } from "../Modal/Modal";

interface IAbility {
  name: string;
  text: string;
  type: string;
}

interface IAttack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

interface IResistance {
  type: string;
  value: string;
}

interface IWeakness {
  type: string;
  value: string;
}

interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
}

interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  evolvesTo?: string[];
  rules?: string[];
  abilities?: IAbility[];
  attacks?: IAttack[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set?: ISet;
  number: string;
  artist?: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  images: {
    small: string;
    large: string;
  };
}

export const Card = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const getData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get("");
      const pokemons: Pokemon[] = response.data.data;
      setData(pokemons);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      setError("Erro ao carregar os Pokémon. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((pokemon) =>
      selectedType
        ? pokemon.types?.some(
            (type) => type.toLowerCase() === selectedType.toLowerCase()
          )
        : true
    );

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const openModal = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Pesquisar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Todos os tipos</option>
          <option value="Fire">Fogo</option>
          <option value="Water">Água</option>
          <option value="Grass">Grama</option>
          <option value="Lightning">Elétrico</option>
        </select>
      </div>

      <div className={styles.cardsContainer}>
        {currentItems.map((pokemon) => (
          <div
            key={pokemon.id}
            className={styles.card}
            onClick={() => openModal(pokemon)}
          >
            <img
              src={pokemon.images.large}
              alt={`Imagem do Pokémon ${pokemon.name}`}
              className={styles.cardImage}
            />
            <div className={styles.name_box}>
              <span>{pokemon.name || "Desconhecido"}</span>
              <img src={typeImg} alt="Tipo do Pokémon" />
            </div>
            <div className={styles.type_box}>
              <span>{pokemon.types?.join(", ") || "Sem tipo"}</span>
              <span>{pokemon.rarity || "Sem raridade"}</span>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedPokemon && (
        <Modal pokemon={selectedPokemon} onClose={closeModal} />
      )}

      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{`Página ${currentPage}`}</span>
        <button
          onClick={nextPage}
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }
        >
          Próxima
        </button>
      </div>
    </>
  );
};
