// As we scale we can offer options of rover, camera angle or date search params.
import * as process from "process";

enum Rover{
    Curiosity = 'curiosity',
    Opportunity = 'opportunity',
    Spirit = 'spirit'
}

export async function GetImagesByQuantity(quantity: number) {
    if(quantity > 400) quantity = 400; // hard limiting to photos per call.

    let resultsArray : string[] = new Array(quantity).fill('');

    let photosAdded = 0;
    let daysSearchedForPhotos = 0;

    // We start at today, and work backwards in time until we have enough photos to fulfill the request
    while(photosAdded < quantity){
        let apiCall = getApiCall(daysSearchedForPhotos)
        const response = await fetch(apiCall);
        const toJson = await response.json();
        daysSearchedForPhotos++;
        addPhotosToArray(toJson);
    }

    function addPhotosToArray(toJson : any) {
        console.log(toJson);
        for(let i = 0; i < toJson.photos.length; i ++) {
            if(photosAdded >= quantity) break; // the results array has been filled.
            resultsArray[i] = toJson.photos[i].img_src;
            photosAdded++;
        }
    }

    return resultsArray;
}

function getApiCall(backdatedDays : number) {
    let today = new Date();
    today.setDate(today.getDate() - backdatedDays);
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() +1).padStart(2,'0');
    let yyyy = today.getFullYear();
    let apiDate = `${yyyy}-${mm}-${dd}`;

    let result = `https://api.nasa.gov/mars-photos/api/v1/rovers/${Rover.Curiosity}/photos?earth_date=${apiDate}&api_key=${process.env.REACT_APP_MARS_ROVER_API_KEY}`;
    return result;
}
