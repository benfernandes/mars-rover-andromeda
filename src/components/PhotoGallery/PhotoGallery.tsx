import react, {useState} from 'react';
import {IPhotoGalleryProps, IPhotoGalleryBottomProps} from './PhotoGallery.interface';

export default function PhotoGallery(props: IPhotoGalleryProps) {
    const [photoIndex, photoIndexSet] = useState(0);
    const [heroImageClass, heroImageClassSet] = useState("PhotoGalleryHeroImage")

    function IncrementPhotoIndex(index: number) {
        // fade out image
        heroImageClassSet("PhotoGalleryHeroImage FadeOutImage")
        setTimeout(() => {
            if (photoIndex + index >= props.images.length) {
                photoIndexSet(0)
            } else if (photoIndex + index < 0) {
                photoIndexSet(props.images.length - 1)
            } else {
                photoIndexSet(prevState => prevState + index);

            }
            heroImageClassSet("PhotoGalleryHeroImage FadeInImage")
        }, 400)
    }

    function SetPhotoIndex(index: number) {
        heroImageClassSet("PhotoGalleryHeroImage FadeOutImage")
        setTimeout(() => {
            photoIndexSet(index)
            heroImageClassSet("PhotoGalleryHeroImage FadeInImage")
        }, 400);
    }

    return (
        <div className="PhotoGalleryContainer">
            {props.images.length > 0 ?
                <>
                <span className="ArrowBase LeftArrow" onMouseDown={() => IncrementPhotoIndex(-1)}> &lt;</span>
                <ImageComponent cssClass={heroImageClass} images={props.images} selectedImage={photoIndex}
                                selectImage={(index: number) => SetPhotoIndex(index)}/>
                <span className="ArrowBase RightArrow" onMouseDown={() => IncrementPhotoIndex(1)}>&gt;</span>
                </> :
                <p>Loading</p>
            }
        </div>
    )
}

function ImageComponent(props: IPhotoGalleryBottomProps) {
    return <div className="ImageComponentContainer">
        <img className={props.cssClass} src={props.images[props.selectedImage]}/>
        <Thumbnails images={props.images} selectedImage={props.selectedImage}
                    selectImage={(index) => props.selectImage(index)}/>
    </div>
}

function Thumbnails(props: IPhotoGalleryBottomProps) {
    return <div className="PhotoGalleryThumbnailsContainer ">
        {props.images.map((image, index) => (
            <div className="PhotoGalleryThumbnailContainer" onMouseDown={() => props.selectImage(index)}>
                <img src={image} className="PhotoGalleryThumbnail"/>
            </div>
        ))
        }
    </div>
}

