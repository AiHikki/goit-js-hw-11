import showMessage from './scripts/iziToast';

const form = document.querySelector('#form'),
  searchInput = document.querySelector('#searchInput'),
  gallery = document.querySelector('#gallery');

form.addEventListener('submit', fetchImages);

function fetchImages(e) {
  e.preventDefault();

  const searchParams = new URLSearchParams({
    key: '41474300-2fa05bee877be877b8dc1781f',
    q: searchInput.value,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      if (images.hits.length === 0) {
        showMessage();
      }
      renderImages(images.hits);
    })
    .catch(error => console.log(error));

  form.reset();
}

function renderImages(images) {
  gallery.innerHTML = images.reduce(
    (
      html,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) =>
      html +
      `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
      </li>
    `,
    ''
  );
}
