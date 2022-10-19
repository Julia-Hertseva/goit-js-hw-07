import { galleryItems } from './gallery-items.js';
// Change code below this line



// const renderGallery = (galleryItems) =>
//     galleryItems.reduce((acc, { preview, original, description }) =>
//         acc + `<div class="gallery__item">
// //   <a class="gallery__link" href="${original}">
// //     <img
// //       class="gallery__image"
// //       src="${preview}"
// //       data-source="${original}"
// //       alt="${description}"
// //     />
// //   </a>
// // </div>`, "");
 


// const renderGallery = (galleryItems) => {
//     const resultRender = galleryItems.map(galleryItem =>
//         `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${galleryItem.preview}"
//       data-source="${galleryItem.original}"
//       alt="${galleryItem.description}"
//     />
//   </a>
// </div>`).join("");
//     return resultRender;
// };


const renderGallery = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`})
        .join("");


const picture = document.querySelector(`.gallery`);
picture.insertAdjacentHTML('beforeend', renderGallery);
 
console.log(renderGallery);


picture.addEventListener(`click`, showOriginalPicture);
function showOriginalPicture(event) {
  event.preventDefault();

  if (!event.target.classList.contains(`gallery__image`)) {
    return console.log("it's not an IMG-element");
  }

  const bigPicture = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`, {
    onShow: (bigPicture) => document.addEventListener('keydown', modalClose),
    onClose: (bigPicture) => document.removeEventListener('keydown', modalClose)
  }
  );

  bigPicture.show();
  
  function modalClose(event) {
    if (event.code === "Escape") {
      bigPicture.close();
    }
  };
}