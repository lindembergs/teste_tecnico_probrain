import { useState, useMemo } from "react";
import { Pokemon } from "../types/pokemon";

interface UsePokemonFiltersProps {
  data: Pokemon[];
  itemsPerPage: number;
}

export const usePokemonFilters = ({
  data,
  itemsPerPage,
}: UsePokemonFiltersProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredData = useMemo(() => {
    return data
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
  }, [data, searchTerm, selectedType]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return {
    currentItems,
    totalPages,
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
  };
};
