import { galleryItems } from './gallery-items.js';
// Change code below this line

// Variables

const listGalleryEl = document.querySelector('.gallery');

// Base Markup

const baseItemsGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
  })
  .join('');

listGalleryEl.innerHTML = baseItemsGalleryMarkup;

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', () => {
  gallery.defaultOptions.captionsData = 'alt';
  gallery.defaultOptions.captionDelay = 250;
});
