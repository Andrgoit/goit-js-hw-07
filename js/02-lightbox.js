import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("ul.gallery");
const galleryMarkup = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });
