import "./Home.scss"
import "./Mars.scss"
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import {useState, useEffect} from "react";
import { GetImagesByQuantity } from "../api/MarsRoverAPI";

function Mars() {
    const [images, setImages] = useState<string[]>([]);
    useEffect(() => {
        GetImagesByQuantity(10).then((res) => {
            setImages(res);
        })
    }, [])
    return (
        <main className="home-page">
            <div className="last-section section-mars">
                <div className="section-title">
                    <h2>MARS</h2>
                    <p className="section-subtitle">VIEW PHOTOS OF MARS!</p>
                </div>
                <PhotoGallery images={images}/>
            </div>
        </main>
    )
}

export default Mars;