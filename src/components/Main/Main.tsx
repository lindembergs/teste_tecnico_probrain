import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Card } from "../Card/Card";
import styles from "./Main.module.css";

export const Main = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };

  return (
    <main className={styles.main}>
      <Card />
      {isModalOpen && selectedPokemon && (
        <Modal pokemon={selectedPokemon} onClose={handleCloseModal} />
      )}
    </main>
  );
};
