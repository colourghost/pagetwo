import { photos } from './data/photos.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const mountThumbs = _ => {
    let markup = ''
    photos.forEach((photo, index) => {
      markup += `<img id="${index}" width="${photo.width}" height="${photo.height}" alt="${photo.title}">`
    })
    thumbContainer.innerHTML = markup
    addThumbListeners()
    renderImages()
  }

  const addThumbListeners = _ => {
    document.querySelectorAll('.thumb-container > img').forEach((thumb, index) => {
      thumb.addEventListener('click', _ => {
        renderModal(index)
      })
    })
  }

  const renderModal = i => {
    const div = document.createElement('div')
    div.classList.add('modal')
    div.innerHTML = `<img src="images/gallery/${photos[i].title}.webp" alt="${photos[i].title}">`
    section.appendChild(div)
    addModalListener(div)
  }

  const addModalListener = modal => {
    modal.addEventListener('click', _ => {
      modal.remove()
    })
  }

  const renderImages = (i = 0) => {
    if (i < photos.length) {
      let image = document.getElementById(i)
      image.src = `images/gallery/${photos[i].title}.webp`
      image.addEventListener('load', _ => {
        image.style.opacity = 1
        renderImages(++i)
      })
    }
  }

  mountThumbs()

})()