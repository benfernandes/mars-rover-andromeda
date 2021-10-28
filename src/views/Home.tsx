import scrollDown from "../images/scrolldown.png"
import "./Home.scss"


function Home() {
    return (
        <main className="home-page">
            <section className="first-section">
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
            </section>   
        </main>
    )
}

export default Home;