import styles from "./Card.module.css";
import typeImg from "../../assets/icons/type_img.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
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
// interface IQuery {
//   name: string;
//   value: string | number;
// }

interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolesFrom?: string;
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

  const getData = async () => {
    try {
      const response = await api.get("");
      const data = response.data.data;
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((pokemon) => (
        <div key={pokemon.id} className={styles.card}>
          <img src={pokemon.images.large} alt="Imagem do pokemon no card" />
          <div className={styles.name_box}>
            <span>{pokemon.name || "Desconhecido"}</span>
            <img src={typeImg} alt="Tipo" />
          </div>
          <div className={styles.type_box}>
            <span>{pokemon.types || "Sem tipo"}</span>
            <span>{pokemon.rarity || "Sem raridade"}</span>
          </div>
        </div>
      ))}
    </>
  );
};
