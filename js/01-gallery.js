import { galleryItems } from './gallery-items.js';
// Change code below this line

// Variables

const listGalleryEl = document.querySelector('.gallery');
let instance;

// Base Markup

const baseGalleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return createGalleyItem(preview, original, description);
  })
  .join('');

listGalleryEl.innerHTML = baseGalleryItemsMarkup;

// Listeners

listGalleryEl.addEventListener('click', lightboxOn);

// Functions

function createGalleyItem(src, srcset, alt) {
  return `<li class="gallery_item">
      <a class="gallery__link" href="${srcset}">
        <img
          data-source="${srcset}"
          src="${src}"
          alt="${alt}"
          width="340"
          height="227"
        />
      </a>
    </li>`;
}

function lightboxOn(evt) {
  evt.preventDefault();
  const clickedItem = evt.target.closest('.gallery__link').firstElementChild;
  console.log(clickedItem);
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
