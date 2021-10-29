import {useEffect, useState} from "react";
import {GetDataMainPhoto, iPotdData, iPotdVideoData} from "../../api/potd";
import './Potd.scss';

export function PhotoOrVideo(videoPotd: iPotdVideoData) {
    if (videoPotd.media_type === "video") {
        return (
            <video
                className="daily-image" src={videoPotd.url + (videoPotd.url.includes("?") ? "&" : "?") + "controls=0"}>
            </video>
        )
    } else {
        return (
            <img className="daily-image" alt="" src={videoPotd.url}/>
        )
    }
}

export function DailyPhoto() {

    const [dataPotd, dataPotdSet] = useState<iPotdData | null>(null);

    useEffect(() => {
        GetDataMainPhoto().then((response) => {
            // response.
            dataPotdSet(response)
        }).catch((defaultObject) => {
            dataPotdSet(defaultObject)
        })
    }, []);

    if (dataPotd === null) {
        return (
            <p>Data Loading</p>
        )
    }

    return (
        <div className="photo-of-the-day">
            <section className="image-section">
                <PhotoOrVideo media_type={dataPotd.media_type} url={dataPotd.url}/>
                <section className="metadata-section">
                    <h3 className="image-title">{dataPotd.title}</h3>
                </section>
            </section>
            <section className="explanation-section">
                <p className="explanation-text">{dataPotd.explanation}</p>
            </section>
        </div>
    );
}

