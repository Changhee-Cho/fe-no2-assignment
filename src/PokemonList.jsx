import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonListContainer, PokemonBox } from './defined-styled-components/dex/PokemonList';
import { Link } from 'react-router-dom';
import MOCK_DATA from './assets/mock/mock';
import { addPokemon } from './redux/pokemonSlice';

const PokemonList = () => {
  const dispatch = useDispatch();
  const { myPokemon, maxSlot } = useSelector(state => state.pokemon);

  const handleAdd = (item) => {
    if (myPokemon.length >= maxSlot) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }
    if (myPokemon.find(p => p.id === item.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }
    dispatch(addPokemon(item));
  };

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
                handleAdd(item);
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