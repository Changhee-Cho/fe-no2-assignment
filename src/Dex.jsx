import React from 'react';
import Container from './defined-styled-components/dex/Dex';
import MyPokemonSection from './MyPokemonSection';
import PokemonListSection from './PokemonListSection';
import MOCK_DATA from './assets/mock/mock';

const Dex = () => {
  return (
    <Container>
      <MyPokemonSection />
      <PokemonListSection pokemonList={MOCK_DATA} />
    </Container>
  );
};

export default Dex;
