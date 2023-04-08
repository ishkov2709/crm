import { galleryItems } from './gallery-items.js';
// Change code below this line

// Variables

const listGalleryEl = document.querySelector('.gallery');
let instance;

// Base Markup

const baseItemsGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return createGalleyItem(preview, original, description);
  })
  .join('');

listGalleryEl.innerHTML = baseItemsGalleryMarkup;

// Listeners

listGalleryEl.addEventListener('click', lightboxOn);

// Functions

function createGalleyItem(src, srcset, alt) {
  return `<li class="gallery_item">
      <a class="gallery__link" href="${srcset}">
        <img
          class="gallery__image"
          data-source="${srcset}"
          src="${src}"
          alt="${alt}"
          width="372"
          height="240"
        />
      </a>
    </li>`;
}

function lightboxOn(evt) {
  evt.preventDefault();
  const clickedItem = evt.target.closest('.gallery__link').firstElementChild;
  instance = basicLightbox.create(`
    <img src="${clickedItem.dataset.source}" width="1280" height="855">
`);

  instance.show();

  window.addEventListener('keydown', lightboxOff);
}

function lightboxOff(evt) {
  if (evt.code === 'Escape') {
    instance.close();

    window.removeEventListener('keydown', lightboxOff);
  }
}
