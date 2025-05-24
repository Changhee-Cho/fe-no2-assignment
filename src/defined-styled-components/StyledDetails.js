import styled from "styled-components";

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content:center;
    height:100vh;
    img{
        width:200px;
        height:200px;
    }
    h2{
        color:red;
        margin: 20px 0px;
    }
    p{
        color:black;
    }
    button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
    .addDelete {
        cursor: pointer;
        border: none;
        background-color: rgb(255, 0, 0);
        color: rgb(255, 255, 255);
        border-radius: 5px;
    }
    .addDelete:hover {
        background-color: rgb(204, 0, 0);
    }
`;

export default StyledDetails;