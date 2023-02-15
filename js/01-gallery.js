import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()



// ----------------------------------------------------------------=

console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery')

const galleryElements = galleryItems.map((element) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
            />
        </a>
    </div > `
).join("")


console.log(galleryElements);

const onGalleryElementClick = (e) => {
    console.log(
        e.target.dataset.source
    );
    // document.querySelector('gallery__image').onclick = () => {
	// basicLightbox.create().show()
    // }

}

galleryWrapper.insertAdjacentHTML('beforeend', galleryElements)

galleryWrapper.addEventListener('click', onGalleryElementClick)

