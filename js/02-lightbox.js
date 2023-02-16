import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector('.gallery')

const createGalleryElements = () => galleryItems.map((element) => 
        `<a class="gallery__item" href="${element.original}">
            <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
        </a>`
).join("") 

galleryWrapper.insertAdjacentHTML('beforeend', createGalleryElements())

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});