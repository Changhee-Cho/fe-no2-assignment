import React, { useState } from 'react';
import Container from './defined-styled-components/dex/Dex';
import MyPokemonSection from './MyPokemonSection';
import PokemonListSection from './PokemonListSection';
import MOCK_DATA from './assets/mock/mock';

const Dex = () => {
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
    <Container>
      <MyPokemonSection
        myPokemon={myPokemon}
        maxSlot={MAX_SLOT}
        onRemove={handleRemovePokemon}
      />
      <PokemonListSection
        pokemonList={MOCK_DATA}
        onAdd={handleAddPokemon}
      />
    </Container>
  );
};

export default Dex;
