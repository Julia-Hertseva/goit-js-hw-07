import { galleryItems } from './gallery-items.js';
// Change code below this line

const renderGallery = galleryItems.reduce((acc, { preview, original, description }) => {
    return acc + `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      alt="${description}"/>
  </a>`}, "");

console.log(renderGallery);

const picture = document.querySelector(`.gallery`);
picture.insertAdjacentHTML('beforeend', renderGallery)


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom"
});