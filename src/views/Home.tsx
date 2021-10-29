import { Link } from "react-router-dom";
import scrollDown from "../images/scrolldown.png"
import earthImg from "../images/earth.png"
import marsImg from "../images/mars.png"
import "./Home.scss"


function Home() {
    return (
        <main className="home-page">
            <section className="first-section temu">
                <div className="section-title">
                    EXPLORE
                    <div className="section-subtitle">THE KNOWN UNIVERSE</div>
                </div>
                {/* <PhotoOfTheDay /> */}
                <div className="scroll-down-wrapper">
                    <img src={scrollDown} className="scroll-down"/>
                </div>
            </section>
            <section className="last-section">
                <div className="section-title">
                    MAR
                    <div className="section-subtitle">MARCH AWAKENS ROMANCE</div>
                </div>
                <Link to="/mars">
                    <img className="mars-icon" src={marsImg} />
                </Link>
                <div className="section-subtitle">SEE IMAGES CAPTURED BY ROVERS ON MARS, BY TELESCOPES FROM EARTH ETC.</div>
                <Link to="/mars" className="eightbit-btn">GO TO MARS {'>>>'}</Link>
            </section>   
            <Link to="/earth">
                <img className="earth-icon" src={earthImg} />
            </Link>
        </main>
    )
}

export default Home;