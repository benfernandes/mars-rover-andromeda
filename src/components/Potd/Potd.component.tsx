import {useEffect, useState } from "react";
import {GetDataMainPhoto, iPotdData, iPotdVideoData } from "../../api/POTD-API/Potd-api";

export function PhotoOrVideo(videoPotd:iPotdVideoData){
    if (videoPotd.media_type == "video"){
        return(
            <iframe
                className="DailyImage" src={videoPotd.url}>
            </iframe>
        )
    }

    return (

        <img className="DailyImage" src={videoPotd.url}></img>
    )
}


export function DailyPhoto(){

    const[dataPotd, dataPotdSet] = useState<iPotdData|null>(null);

    useEffect(() => {
        GetDataMainPhoto.then((response) => {
            dataPotdSet(response)
        }).catch((defaultObject) => {
            dataPotdSet(defaultObject)
        })
    }, []);

    if (dataPotd == null) {
        return (
            <div>Data Loading</div>
        )
    }


    return (
        <div className="PhotoOfTheDay">
            <section className="ImageSection">
                <PhotoOrVideo media_type={dataPotd.media_type} url={dataPotd.url} />
            </section>

            <section className="MetadataSection">
                <div>{dataPotd.copyright}</div>
                <div>{dataPotd.title}</div>
                <div>{dataPotd.date}</div>
            </section>

            <section className="ExplanationSection">
                <div>{dataPotd.explanation}</div>
            </section>

        </div>
    );
    }
