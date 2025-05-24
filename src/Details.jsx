import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StyledDetails from './defined-styled-components/StyledDetails';
import MOCK_DATA from './assets/mock/mock';
import queryString from 'query-string';

const Details = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const id = parsed.id;
  const item = MOCK_DATA.find(item => String(item.id) === id);
  const navigate = useNavigate();
  return (
    <StyledDetails>
      {item ? <>
        <img src={item.img_url} alt={item.korean_name} />
        <h2>{item.korean_name}</h2>
        <p className='types'>타입: {item.types.join(', ')}</p>
        <p className='description'>{item.description}</p>
        <button onClick={() => { navigate(-1) }}>뒤로 가기</button>
      </>
        :
        <h2>id값에 맞는 정보가 없습니다.</h2>
      }
    </StyledDetails>
  );
};

export default Details;