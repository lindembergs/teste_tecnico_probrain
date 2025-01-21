import { useState, useEffect } from "react";
import { Pokemon } from "../types/pokemon";
import { api } from "../services/api";

export const usePokemonData = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get("");
      setData(response.data.data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      setError("Erro ao carregar os Pokémon. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return { data, isLoading, error };
};
