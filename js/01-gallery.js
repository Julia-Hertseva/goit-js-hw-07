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


const renderGallery = (galleryItems) =>
    galleryItems
        .map(({ preview, original,description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)
        .join("");


const picture = document.querySelector(`.gallery`);
const insertGalleryItems = (image) => {
    picture.insertAdjacentHTML('beforeend', image);
};
 
console.log(renderGallery(galleryItems));

const result = renderGallery(galleryItems);
insertGalleryItems(result);


picture.addEventListener(`click`, showOriginalPicture);
function showOriginalPicture(event) {
  event.preventDefault();

  if (!event.target.classList.contains(`gallery__image`)) {
    return console.log("it's not an IMG-element");
  }

  const bigPicture = basicLightbox.create(`
    <img src="${event.target.dataset.source} width="1400" height="900" ";
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