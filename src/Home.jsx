import React from 'react'
import Intro from './defined-styled-components/Intro'
import pokemonLogo from './assets/imgs/main/pokemon-logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Intro>
      <img src={pokemonLogo} alt="로고" />
      <button onClick={() => {
        navigate("/dex")
      }}>포켓몬 도감 시작하기</button>
    </Intro>
  )
}

export default Home