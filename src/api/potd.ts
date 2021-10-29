import axios, {AxiosResponse} from 'axios';

export interface iPotdData {
    copyright: string;
    date: Date;
    explanation: string;
    media_type: string;
    title: string;
    url: string;
}

export interface iPotdVideoData {
    media_type: string;
    url: string;
}

const defaultObject:iPotdData = {
    copyright: "Pic from google",
    date: new Date(),
    explanation: "This is mars!",
    media_type: "image",
    title: "Mars!",
    url: "api/mars.jpg"
}

export const GetDataMainPhoto = 
    new Promise<iPotdData>(async(resolve, reject) => {
        var response: AxiosResponse<iPotdData>
        try {
            response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            resolve(response.data);
        } catch (error) {
            //Todo
            console.log(error)
            reject(defaultObject);
        }
    })

