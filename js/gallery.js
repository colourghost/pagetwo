import { photos } from './data/photos.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const renderThumbs = _ => {
    let markup = ''
    photos.forEach(photo => {
      markup += `<img src="images/gallery/${photo.title}.webp" width="${photo.width}" height="${photo.height}">`
    })
    thumbContainer.innerHTML = markup
    addThumbListeners()
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
    div.innerHTML = `<img src="images/gallery/${photos[i].title}.webp">`
    section.appendChild(div)
    addModalListener(div)
  }

  const addModalListener = modal => {
    modal.addEventListener('click', _ => {
      modal.remove()
    })
  }

  renderThumbs()

})()