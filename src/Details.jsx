import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StyledDetails from './defined-styled-components/StyledDetails';
import MOCK_DATA from './assets/mock/mock';
import queryString from 'query-string';
import { addPokemon, removePokemon } from './redux/pokemonSlice';
import { toast } from 'react-toastify';

const Details = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const id = parsed.id;
  const item = MOCK_DATA.find(item => String(item.id) === id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { myPokemon, maxSlot } = useSelector(state => state.pokemon);

  const isInMyPokemon = item ? myPokemon.some(p => p.id === item.id) : false;

  const handleAdd = () => {
    if (!item) return;

    if (myPokemon.length >= maxSlot) {
      toast.error('더 이상 선택할 수 없습니다.')
      return;
    }
    if (isInMyPokemon) {
      toast.warning('이미 선택된 포켓몬입니다.');
      return;
    }

    dispatch(addPokemon(item));
  };

  const handleRemove = () => {
    if (!item) return;

    dispatch(removePokemon(item));
  };

  return (
    <StyledDetails>
      {item ? (
        <>
          <img src={item.img_url} alt={item.korean_name} />
          <h2>{item.korean_name}</h2>
          <p className="types">타입: {item.types.join(', ')}</p>
          <p className="description">{item.description}</p>
          {isInMyPokemon ? (
            <button className="addDelete" onClick={handleRemove}>
              삭제
            </button>
          ) : (
            <button className="addDelete" onClick={handleAdd}>
              추가
            </button>
          )}
          <button onClick={() => navigate(-1)}>뒤로 가기</button>
        </>
      ) : (
        <h2>id값에 맞는 정보가 없습니다.</h2>
      )}
    </StyledDetails>
  );
};

export default Details;