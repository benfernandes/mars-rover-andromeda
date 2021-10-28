import axios from 'axios';
import Jimp from 'jimp';
import download from 'downloadjs';



export interface IPhotos {
    photos: IPhoto[]
}

export interface IPhoto {
    id: number
    img_src: string
}

const emptyRes: IPhotos = {
    photos: []
}


export class Api {
    pageNum: number
    bens: Jimp[] = []

    constructor(pageNum: number) {
        this.pageNum = pageNum;
        Jimp.read('https://media-exp1.licdn.com/dms/image/C4D03AQF7C5KzdUFLcg/profile-displayphoto-shrink_800_800/0/1562106459334?e=1640822400&v=beta&t=cxfz3krX6WGoioFbdfCkmSno2pfzbNLvn80_E-1tRmU').then((image) => {
            for (let i = 1; i < 10; i++) {
                const resizedIMage = image.resize(i * 10, i * 10)
                this.bens.push(resizedIMage)
            // console.log(image.getWidth());
            }
        })
    }


    public async requestAndModifyImages(): Promise<IPhotos> {
        try {
            const images = await this.Images();
            await this.SaveImage(images.photos[0].img_src)
            // return this.ModifyImages()
            return emptyRes;
        } catch (e) {
            return emptyRes;
        }
    }

    private Images = () => new Promise<IPhotos>(async (resolve, reject) => {
        try {
            const res = await axios.get<IPhotos>(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${this.pageNum}&api_key=sHSN7hGGKfTPdKfrFGzi4rfG88MvboUazwhIJtnQ`)
            if (!res.data.photos)
                throw 'no photos found';
            console.log(res.data.photos.length)
            resolve(res.data);
            // console.log(res.data.photos)
        } catch (e) {
            reject(emptyRes);
        }
    });

    private SaveImage = async (photo: string) => {
        axios({
            method: "get",
            url: "https" + photo.substring(4, photo.length),
            responseType: "blob"
        })
            .then(function (response) {
                download(response.data, "./media/test.jpg");
            })
            .catch(e => {
                console.error("error", e)
            });

    }

    private ModifyImages = (rawImages: IPhotos) => new Promise<IPhotos>((resolve, reject) => {
        let res: IPhotos = {
            photos: []
        }
        try {
            console.log("HERE 1")
            rawImages.photos.map((photo, index) => {
                console.log("HERE " + index);
                Jimp.read(photo.img_src).then(async (image) => {
                    // res.photos.push({
                    //         id: index,
                    console.log("inside " + index);

                    const res = await image.composite(this.bens[Math.floor(Math.random() * 10)], image.getHeight() / 2, image.getWidth() / 2).getBase64Async(Jimp.MIME_JPEG);
                    console.log(res.length);
                    console.log("finished " + index);

                    // }
                    // );
                })
            })
        } catch (e) {
            console.log(e)
        }
        return res;
    })
}