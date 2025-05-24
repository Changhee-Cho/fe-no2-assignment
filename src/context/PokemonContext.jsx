import React, { createContext, useState, useContext } from 'react';

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState([]);
  const MAX_SLOT = 6;

  const handleAddPokemon = (pokemon) => {
    if (myPokemon.find(p => p?.id === pokemon.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }
    if (myPokemon.length >= MAX_SLOT) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }
    setMyPokemon([...myPokemon, pokemon]);
  };

  const handleRemovePokemon = (pokemon) => {
    setMyPokemon(myPokemon.filter(p => p.id !== pokemon.id));
  };

  return (
    <PokemonContext.Provider
      value={{ myPokemon, maxSlot: MAX_SLOT, handleAddPokemon, handleRemovePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
