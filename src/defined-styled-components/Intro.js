import styled from "styled-components";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  img {
    width: 600px;
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    background-color: rgb(255, 0, 0);
    border: none;
    color: white;
    transition: background-color 0.3s;
  }
  @media (prefers-color-scheme: light) {
    button:hover {
      background-color: rgb(204,0,0);
    }
  }
`;

export default Intro;