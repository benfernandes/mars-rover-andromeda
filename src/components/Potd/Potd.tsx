import {useEffect, useState } from "react";
import {GetDataMainPhoto, iPotdData, iPotdVideoData } from "../../api/Potd";
import './Potd.scss';
// import VideoThumbnail from 'react-video-thumbnail';

export function PhotoOrVideo(videoPotd:iPotdVideoData){
    if (videoPotd.media_type == "video"){


        return(
            <iframe
                className="DailyImage" src={videoPotd.url+(videoPotd.url.includes("?") ? "&" : "?") + "controls=0"}>
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
                <section className="MetadataSection">
                    <div className={"ImageTitle"}>{dataPotd.title}</div>
                </section>
            </section>

            <section className="ExplanationSection">
                <div className="ExplanationText">{dataPotd.explanation}</div>
            </section>



        </div>
    );
    }
