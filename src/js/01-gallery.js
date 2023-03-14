// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryCardMarkup = createGalleryCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);


function createGalleryCardMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join('');

};

var gallery = new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250, captionsData: 'alt' });
gallery.on('show.simplelightbox', function (e) {
	e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
});