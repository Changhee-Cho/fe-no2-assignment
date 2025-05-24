import React from 'react';
import { useDispatch } from 'react-redux';
import { PokemonListContainer, PokemonBox } from './defined-styled-components/dex/PokemonList';
import { Link } from 'react-router-dom';
import MOCK_DATA from './assets/mock/mock';
import { addPokemon } from './redux/pokemonSlice';

const PokemonList = () => {
  const dispatch = useDispatch();

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
                dispatch(addPokemon(item));
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

export default PokemonList;
