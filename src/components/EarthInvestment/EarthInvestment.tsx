import React, {useEffect, useState} from 'react';
import './EarthInvestment.scss';

export function SelectEarthInvestmentArea() {

    const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
    const [lon, setLon] = useState("-95.33");
    const [lat, setLat] = useState("29.78");
    const [date, setDate] = useState("2018-01-01");
    const [fullURL, setFullUrl] = useState(`${baseURL}?lon=${lon}&lat=${lat}&date=${date}&dim=0.15&api_key=HA5G94lZD32prK0gefXbvjYa8Vq9319MbB5NFcBY`);

    useEffect(() => {
        setFullUrl(`${baseURL}?lon=${lon}&lat=${lat}&date=${date}&dim=0.15&api_key=HA5G94lZD32prK0gefXbvjYa8Vq9319MbB5NFcBY`);

    }, [lon, lat, date])

    const handleChangeLon = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const newValue = event.currentTarget.value;
        setLon(newValue);
    }

    const handleChangeLat = (event: React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setLat(newValue);
    }

    const handleChangeDate = (event: React.FormEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        setDate(newValue);
    }


    return (
        <div className="earthContainer">
            <img src={fullURL} className="earthimage prettyBoxShadow" onError={(e) => {setFullUrl("https://media.istockphoto.com/vectors/space-exploration-background-design-modern-gradient-vector-template-vector-id1178088975?b=1&k=20&m=1178088975&s=170667a&w=0&h=bkUTh-FJixPpdROIlpj4k-7838MAeSMLinnWj8Rc5ys=")}}></img>
            <div>
                <label className="earthlabel">Enter Latitude</label>
                <input className="EarthInvestmentInput" type={"text"} value={lon} onInput={handleChangeLon}/>
            </div>
            <div>
                <label className="earthlabel">Enter Longitude</label>
                <input className="EarthInvestmentInput" type={"text"} value={lat} onChange={handleChangeLat}/>
            </div>
            <div>
                <label className="earthlabel">Enter Date</label>
                <input className="EarthInvestmentInput" type={"date"} value={date} onChange={handleChangeDate}/>
            </div>
        </div>


    )
}



