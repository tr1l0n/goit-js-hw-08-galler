let gallery = document.querySelector('.js-gallery');
let lightbox = document.querySelector('.js-lightbox');
let lightboxImg = document.querySelector('.lightbox__image');
let btnClose = document.querySelector('button[data-action="close-lightbox"]');
const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
for (let element of galleryItems) {
    let li = document.createElement('li');
    li.classList.add('gallery__item');
    let img = document.createElement('img');
    img.classList.add('gallery__image')
    img.src = element.preview;
    img.alt = element.description;
    li.append(img);
    gallery.append(li);
}
gallery.addEventListener('click', event => {
    event.preventDefault();
    if (lightbox.classList.contains('is-open')) {
        return;
    }
    let img = event.target.closest('img');
    let src = galleryItems.findIndex(element => {
        if (element.description === img.alt) {
            return element.original;
        }
    });
    lightboxImg.src = galleryItems[src].original;
    lightbox.classList.add('is-open');
});
btnClose.addEventListener('click', event => {
    event.preventDefault();
    lightbox.classList.remove('is-open');
});
document.addEventListener('keydown', event => {
    if (lightbox.classList.contains('is-open')) {
        if (event.key === 'Escape') {
            lightbox.classList.remove('is-open');
        }
    }
});
lightbox.addEventListener('click', event => {
    if (lightbox.classList.contains('is-open')) {
        if (event.target.closest('div').classList.contains('lightbox__overlay')) {
            lightbox.classList.remove('is-open');
        }
    }
})
