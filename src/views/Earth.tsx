import "./Earth.scss"
import {SelectEarthInvestmentArea} from '../components/EarthInvestment/EarthInvestment';

function Earth() {
    return (
        <main className="home-page">
            <section className="first-section">
                <h3 className="section-title">
                    EARTH
                    <p className="section-subtitle">VIEW PHOTOS OF EARTH</p>
                </h3>
                <SelectEarthInvestmentArea/>
            </section>
        </main>
    )
}

export default Earth;
