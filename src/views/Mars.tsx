import "./Home.scss"
import "./Mars.scss"
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import {useState} from "react";

function Mars() {
    const [images, setImages] = useState<string[]>(["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",])
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