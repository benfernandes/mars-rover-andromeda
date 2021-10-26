import React from "react";

// Api key - t7bN4gPSJzbQidlv33BJnyY2IT8dD3d0KuDztdWz

// As we scale we can offer options of rover, camera angle or date search params.
enum Rover{
    Curiosity = 'curiosity',
    Opportunity = 'opportunity',
    Spirit = 'spirit'
}

const getImagesByRover = async(howManyMarsDaysWorth : number) => {
    let startOfCall: string = 'https://api.nasa.gov/mars-photos/api/v1/'; 
    let apiCall: string = startOfCall + Rover.Curiosity + `/photos?sol=${howManyMarsDaysWorth}&api_key=t7bN4gPSJzbQidlv33BJnyY2IT8dD3d0KuDztdWz`;
    
    try{
        const response = await fetch(apiCall)
        return await response.json();
    }
    catch{ 
        return null;
    }
}


export {getImagesByRover};


