import React from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";

const NasaImg = styled.img`
  height: 400px;
  border-radius: 10px;
`;

const NasaP = styled.p`
    font-family: 'McLaren', cursive;
`

const NasaCard = (props) => {
    return (
        <Jumbotron>
            <h2>{props.title}</h2>
            <NasaImg src={props.imgUrl} alt="nasa image"></NasaImg>
            <h3>{props.date}</h3>
            <NasaP>{props.explain}</NasaP>
        </Jumbotron>
    )
}

export default NasaCard;