
// As we scale we can offer options of rover, camera angle or date search params.
enum Rover{
    Curiosity = 'curiosity',
    Opportunity = 'opportunity',
    Spirit = 'spirit'
}

export async function GetImagesByQuantity(quantity: number) {
    let startSol = quantity * 1.2; // we are giving the API more days than pictures we're looking for to make sure we return enough.
    let apiCall: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${Rover.Curiosity}/photos?sol=${startSol}&api_key=${process.env.REACT_APP_MARS_ROVER_API_KEY}`;

    let resultsArray : string[] = new Array(quantity).fill('');
    let toJson;
    let returnedImagesArrayLength = 0;

    // The API does not allow for requesting a specific quantity of images, to get around this we make sure we get more than we need.
    // We then only populate the results array with how many we need.
    while(returnedImagesArrayLength < quantity) {
        const response = await fetch(apiCall);
        toJson = await response.json();
        startSol += 10; // we're going to increase this till we have enough photos.
        returnedImagesArrayLength = toJson.photos.length;
    }

    for(let i = 0; i < quantity; i ++) {
        resultsArray[i] = toJson.photos[i].img_src;
    }

    return resultsArray;
}



