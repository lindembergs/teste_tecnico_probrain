export interface IAbility {
  name: string;
  text: string;
  type: string;
}

export interface IAttack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

export interface IResistance {
  type: string;
  value: string;
}

export interface IWeakness {
  type: string;
  value: string;
}

export interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
}

export interface Pokemon {
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
  level?: string;
}

export interface PokemonFiltersProps {
  searchTerm: string;
  selectedType: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

export interface ModalProps {
  pokemon: {
    name: string;
    level?: string;
    images: { large: string };
    types?: string[];
    evolvesFrom?: string;
    hp?: string;
    attacks?: IAttack[];
    weaknesses?: IWeakness[];
    abilities?: IAbility[];
    artist?: string;
  } | null;
  onClose: () => void;
}
