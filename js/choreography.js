import { choreos } from './data/choreos.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const renderThumbs = _ => {
    let markup = ''
    choreos.forEach(choreo => {
      markup +=
       `<div>
          <img src="images/choreography/${choreo.image}.jpg">
          <div>${choreo.title}</div>
        </div>`
    })
    thumbContainer.innerHTML = markup
    addThumbListeners()
  }

  const addThumbListeners = _ => {
    document.querySelectorAll('img').forEach((thumb, index) => {
      thumb.addEventListener('click', _ => {
        renderModal(index)
      })
    })
  }

  const renderModal = i => {
    const div = document.createElement('div')
    div.classList.add('modal')
    div.innerHTML = `<iframe src="https://www.youtube.com/embed/${choreos[i].id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
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