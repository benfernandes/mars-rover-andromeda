import React, {useEffect, useState} from 'react';
import './EarthInvestment.scss';

export function SelectEarthInvestmentArea() {

    const baseURL = "https://api.nasa.gov/planetary/earth/imagery";
    const [lon, setLon] = useState("-95.33");
    const [lat, setLat] = useState("29.78");
    const [date, setDate] = useState("2018-01-01");
    const [fullURL, setFullUrl] = useState(`${baseURL}?lon=${lon}&lat=${lat}&date=${date}&dim=0.15&api_key=HA5G94lZD32prK0gefXbvjYa8Vq9319MbB5NFcBY`);

    useEffect(()=>{
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
        <div>
            <img src={fullURL}></img>
            <form>
                <label>Enter Latitude</label>
                <input type={"text"} value={lon} onInput={handleChangeLon}/>

                <label>Enter Longitude</label>
                <input type={"text"} value={lat} onChange={handleChangeLat}/>

                <label>Enter Date</label>
                <input type={"date"} value={date} onChange={handleChangeDate}/>
                
            </form>
        </div>


    )
}



