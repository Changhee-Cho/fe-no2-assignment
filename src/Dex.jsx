import React, { useState } from 'react'
import Container from './defined-styled-components/dex/Dex'
import { MyPokemonContainer, MyPokemonList, MyPokemon } from './defined-styled-components/dex/MyPokemon'
import { PokemonListContainer, PokemonBox } from './defined-styled-components/dex/PokemonList'
import MOCK_DATA from './assets/mock/mock'
import pokeball_img from './assets/imgs/dex/pokeball.png'
import { Link } from 'react-router-dom'

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);

  const MAX_SLOT = 6;

  // 포켓몬 추가 함수
  const handleAddPokemon = (pokemon) => {
    if (myPokemon.find(p => p?.id === pokemon.id)) {
      alert('이미 추가된 포켓몬입니다!');
      return;
    }
    if (myPokemon.length >= MAX_SLOT) {
      alert('포켓몬 슬롯이 가득 찼습니다!');
      return;
    }
    setMyPokemon([...myPokemon, pokemon]);
  };

  // 포켓몬 삭제 함수
  const handleRemovePokemon = (pokemon) => {
    const newMyPokemon = myPokemon.filter(p => p.id !== pokemon.id);
    setMyPokemon(newMyPokemon);
  };

  return (
    <Container>
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
                  handleRemovePokemon(item);
                }}
              >
                삭제
              </button>
            </PokemonBox>
          ))}
          {[...Array(MAX_SLOT - myPokemon.length)].map((_, index) => (
            <MyPokemon key={`empty-${index}`}>
              <img src={pokeball_img} alt="포켓볼" />
            </MyPokemon>
          ))}
        </MyPokemonList>
      </MyPokemonContainer>

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
    </Container>
  )
}

export default Dex;
