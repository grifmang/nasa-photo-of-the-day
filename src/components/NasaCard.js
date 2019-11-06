import React from "react";

const NasaCard = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.imgUrl} alt="daily nasa photo" />
            <p>{props.explain}</p>
        </div>
    )
}

export default NasaCard;