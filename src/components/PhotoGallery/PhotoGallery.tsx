import React, {useState} from 'react';
import './PhotoGallery.scss';

interface IPhotoGalleryProps {
    images: string[]
}

interface IPhotoGalleryBottomProps {
    images: string[]
    selectedImage: number
    selectImage: (index: number) => void
    cssClass?: string
}

export default function PhotoGallery(props: IPhotoGalleryProps) {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [heroImageClass, setHeroImageClass] = useState("PhotoGalleryHeroImage")

    function IncrementPhotoIndex(index: number) {
        setHeroImageClass("PhotoGalleryHeroImage FadeOutImage")
        setTimeout(() => {
            setPhotoIndex(prevState => (prevState + index) % props.images.length);
            setHeroImageClass("PhotoGalleryHeroImage FadeInImage")
        }, 400)
    }

    function SetPhotoIndex(index: number) {
        setHeroImageClass("PhotoGalleryHeroImage FadeOutImage")
        setTimeout(() => {
            setPhotoIndex(index)
            setHeroImageClass("PhotoGalleryHeroImage FadeInImage")
        }, 400);
    }

    return (
        <div className="PhotoGalleryContainer">
            {props.images.length > 0 ?
                <>
                    <span className="ArrowBase LeftArrow" onMouseDown={() => IncrementPhotoIndex(-1)}>&lt;</span>
                    <ImageComponent cssClass={heroImageClass}
                                    images={props.images}
                                    selectedImage={photoIndex}
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
        <img alt="" className={props.cssClass} src={props.images[props.selectedImage]}/>
        <Thumbnails images={props.images} selectedImage={props.selectedImage}
                    selectImage={(index) => props.selectImage(index)}/>
    </div>
}

function Thumbnails(props: IPhotoGalleryBottomProps) {
    return <div className="PhotoGalleryThumbnailsContainer">
        {
            props.images.map((image, index) => (
                <div className="PhotoGalleryThumbnailContainer" onMouseDown={() => props.selectImage(index)}>
                    <img alt="" src={image}
                         className={`PhotoGalleryThumbnail ${index === props.selectedImage ? "SelectedImage" : ""}`}/>
                </div>
            ))
        }
    </div>
}

