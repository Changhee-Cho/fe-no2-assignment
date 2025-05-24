import React from 'react';
import { MyPokemonContainer, MyPokemonList, MyPokemon } from './defined-styled-components/dex/MyPokemon';
import pokeball_img from './assets/imgs/dex/pokeball.png';
import { Link } from 'react-router-dom';

const MyPokemonSection = ({ myPokemon, maxSlot, onRemove }) => {
  return (
    <MyPokemonContainer>
      <h2>나만의 포켓몬</h2>
      <MyPokemonList>
        {myPokemon.map((item, index) => (
          <MyPokemon key={index}>
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
                onRemove(item);
              }}
            >
              삭제
            </button>
          </MyPokemon>
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

export default MyPokemonSection;
