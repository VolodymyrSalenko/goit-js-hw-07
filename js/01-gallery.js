import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryContent = galleryItems.map(({ preview, original, description }) => {
return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
        </div>`
    
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryContent);

const array = document.querySelectorAll('.gallery__item');
let instance = '';

galleryEl.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) return;

    event.preventDefault();
    const bigImg = event.target.dataset.source;

    instance = basicLightbox.create(`<img src="${bigImg}" width="800" height="600">`);
    instance.show();

    document.addEventListener('keydown', closeModalEscape);
});

function closeModalEscape(event) {
    if (event.code !== 'Escape') return;
    
    instance.close();
    document.removeEventListener('keydown', closeModalEscape);
};