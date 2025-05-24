import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MyPokemonContainer, MyPokemonList, MyPokemon } from './defined-styled-components/dex/MyPokemon';
import { PokemonBox } from './defined-styled-components/dex/PokemonList';
import pokeball_img from './assets/imgs/dex/pokeball.png';
import { Link } from 'react-router-dom';
import { removePokemon } from './redux/pokemonSlice';

const PokemonCard = () => {
  const dispatch = useDispatch();
  const { myPokemon, maxSlot } = useSelector(state => state.pokemon);

  return (
    <MyPokemonContainer>
      <h2>나만의 포켓몬</h2>
      <MyPokemonList>
        {myPokemon.map((item, index) => (
          <PokemonBox key={index}>
            <Link to={`/pokemon-detail?id=${item.id}`}>
              <img src={item.img_url} alt={item.korean_name} />
              <div>
                <p className="korName">{item.korean_name}</p>
                <p className="idNumber">No. {String(item.id).padStart(3, '0')}</p>
              </div>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(removePokemon(item));
              }}
            >
              삭제
            </button>
          </PokemonBox>
        ))}
        {[...Array(maxSlot - myPokemon.length)].map((_, index) => (
          <MyPokemon key={`empty-${index}`}>
            <img src={pokeball_img} alt="포켓볼" />
          </MyPokemon>
        ))}
      </MyPokemonList>
    </MyPokemonContainer>
  );
};

export default PokemonCard;