import { choreos } from './data/choreos.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const mountThumbs = _ => {
    let markup = ''
    choreos.forEach((choreo, index) => {
      markup +=
       `<div>
          <img id="${index}" alt="${choreo.title}">
          <div>${choreo.title}</div>
        </div>`
    })
    thumbContainer.innerHTML = markup
    addThumbListeners()
    renderImages()
  }

  const addThumbListeners = _ => {
    document.querySelectorAll('.thumb-container img').forEach((thumb, index) => {
      thumb.addEventListener('click', _ => {
        renderModal(index)
      })
    })
  }

  const renderModal = i => {
    const div = document.createElement('div')
    div.classList.add('modal')
    div.innerHTML = `<iframe src="https://www.youtube.com/embed/${choreos[i].id}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    section.appendChild(div)
    addModalListener(div)
  }

  const addModalListener = modal => {
    modal.addEventListener('click', _ => {
      modal.remove()
    })
  }

  const renderImages = (i = 0) => {
    if (i < choreos.length) {
      let image = document.getElementById(i)
      image.src = `images/choreography/${choreos[i].image}.jpg`
      image.addEventListener('load', _ => {
        image.parentElement.style.opacity = 1
        renderImages(++i)
      })
    }
  }

  mountThumbs()

})()