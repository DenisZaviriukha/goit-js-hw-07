import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector('.gallery')
 
const createGalleryElements = () => galleryItems.map((element) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
            />
        </a>
    </div > 
    `
).join("") 

const onGalleryElementClick = (e) => {
    if (e.target.classList.value !== 'gallery__image') {
        return
    }

    e.preventDefault()
    
    const onEscButton = (e) => {
        if (e.key === 'Escape') {
            instance.close()
        }
        document.removeEventListener('keydown', onEscButton)
    }
    
    const instance = basicLightbox.create(`
		<img src="${e.target.dataset.source}">
	`)
    
    instance.show(e => {
        document.addEventListener('keydown', onEscButton)
    }) 
}

galleryWrapper.insertAdjacentHTML('beforeend', createGalleryElements())
galleryWrapper.addEventListener('click', onGalleryElementClick)
