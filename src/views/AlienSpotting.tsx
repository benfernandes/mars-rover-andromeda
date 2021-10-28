import react, {useEffect, useState} from 'react';
import {Api, IPhotos} from "../api/AlienSpotting/Api";

export function AlienSpotting(){
    const api = new Api(1);
    const [images, imagesSet] = useState<IPhotos>();
    useEffect(() => {
        getPhotos().then();
    }, [])

    const getPhotos = async () =>{
        imagesSet(await api.requestAndModifyImages());
    }
    return (
        <img src={"http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg"}/>

    )
}

