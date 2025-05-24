import React from 'react';
import Container from './defined-styled-components/dex/Container';
import PokemonCard from './PokemonCard';
import PokemonList from './PokemonList';

const Dashboard = () => {
  return (
    <Container>
      <PokemonCard />
      <PokemonList />
    </Container>
  );
};

export default Dashboard;
