import "./Earth.scss"
import {SelectEarthInvestmentArea} from '../components/EarthInvestment/EarthInvestment';

function Earth() {
    return (
        <main className="home-page">
            <section className="first-section">
                <div className="section-title">
                    EARTH
                    <div className="section-subtitle">VIEW PHOTOS OF EARTH</div>
                </div>
                <SelectEarthInvestmentArea/>
            </section>
        </main>
    )
}

export default Earth;
