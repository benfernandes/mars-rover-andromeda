// Api key - t7bN4gPSJzbQidlv33BJnyY2IT8dD3d0KuDztdWz

// As we scale we can offer options of rover, camera angle or date search params.
enum Rover{
    Curiosity = 'curiosity',
    Opportunity = 'opportunity',
    Spirit = 'spirit'
}

async function GetImagesByQuantity(quantity: number) {
    // const ApiContext = useContext(ApiCtx);
    const apiKey = 't7bN4gPSJzbQidlv33BJnyY2IT8dD3d0KuDztdWz';
    let startSol = quantity * 1.2; // we are giving the API more days than pictures we're looking for to make sure we return enough.
    let apiCall: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${Rover.Curiosity}/photos?sol=${startSol}&api_key=${apiKey}`;
    let resultsArray : string[] = new Array(quantity).fill('');
    let toJson;
    let arrayLength = 0;
    
    while(arrayLength < quantity)
    {    
        const response = await fetch(apiCall);
        toJson = await response.json();
        startSol += 10; // we're going to increase this till we have enough photos.
        arrayLength = toJson.photos.length;
    }

    for(let i = 0; i < quantity; i ++)
    {
        resultsArray[i] = toJson.photos[i].img_src;
    }


    return resultsArray;

    

}




export {GetImagesByQuantity};


