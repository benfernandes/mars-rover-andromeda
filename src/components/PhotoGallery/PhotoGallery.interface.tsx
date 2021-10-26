export interface IPhotoGalleryProps {
    images : string[]
}

export interface IPhotoGalleryBottomProps {
    images: string[]
    selectedImage: number
    selectImage: (index: number) => void
    cssClass?: string
}