import React from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import { Container } from "reactstrap";

function NasaList() {
    const [photo, setPhoto] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=PBQq0gNmJRS7vjT2JKwyx3ogJAj2Vd5cInGISj52")
        .then(response => {
            //console.log(response.data);
            setPhoto(response.data);
            //console.log(response);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })
    }, [])

    return (
        <Container>
            <NasaCard 
            imgUrl={photo.url}
            date={photo.date}
            explain={photo.explanation}
            title={photo.title} />
        </Container>
    )
}

export default NasaList;