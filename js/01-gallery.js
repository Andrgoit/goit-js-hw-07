import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("div.gallery");
const galleryMarkup = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", openGalleryItem);

function openGalleryItem(e) {
  e.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" alt="${e.target.dataset.description}">
  `);

  instance.show();
}
