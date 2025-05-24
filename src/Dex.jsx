import React from 'react';
import Container from './defined-styled-components/dex/Dex';
import MyPokemonSection from './MyPokemonSection';
import PokemonListSection from './PokemonListSection';

const Dex = () => {
  return (
    <Container>
      <MyPokemonSection />
      <PokemonListSection  />
    </Container>
  );
};

export default Dex;
