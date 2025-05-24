import React from 'react';
import { usePokemon } from './context/PokemonContext';
import { PokemonListContainer, PokemonBox } from './defined-styled-components/dex/PokemonList';
import { Link } from 'react-router-dom';
import MOCK_DATA from './assets/mock/mock';

const PokemonListSection = () => {
  const { handleAddPokemon } = usePokemon();

  return (
    <PokemonListContainer>
      {MOCK_DATA.map((item) => (
        <Link key={item.id} to={`/pokemon-detail?id=${item.id}`}>
          <PokemonBox>
            <img src={item.img_url} alt={item.korean_name} />
            <div>
              <p className="korName">{item.korean_name}</p>
              <p className="idNumber">No. {String(item.id).padStart(3, '0')}</p>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddPokemon(item);
              }}
            >
              추가
            </button>
          </PokemonBox>
        </Link>
      ))}
    </PokemonListContainer>
  );
};

export default PokemonListSection;