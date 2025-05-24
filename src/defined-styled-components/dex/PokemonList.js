import styled from "styled-components";

export const PokemonListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: rgb(240, 240, 240);
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
`;

export const PokemonBox = styled.div`
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover{
        transform: translateY(-5px);
        box-shadow: rgba(0,0,0,0.2) 0px 8px 16px;
    }
    img {
        width:100px;
        height:100px;
    }
    .korName {
        font-size:14px;
        font-weight: bold;
        margin:5px 0px;
        color:black;
    }
    .idNumber {
        font-size: 12px;
        color:rgb(102,102,102);
    }
    button {
            margin-top: 10px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5px;
    }
    button:hover {
        background-color: rgb(204, 0, 0);
    }

`;