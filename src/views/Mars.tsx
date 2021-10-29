import "./Home.scss"
import "./Mars.scss"
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";

function Mars() {
    return (
        <main className="home-page">
            <div className="last-section section-mars">
                <div className="section-title">
                    MARS
                    <div className="section-subtitle">VIEW PHOTOS OF MARS!</div>
                </div>
                <PhotoGallery images={["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG", "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",]}/>
            </div>
        </main>
    )
}

export default Mars;