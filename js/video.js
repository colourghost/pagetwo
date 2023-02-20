import { videos } from './data/videos.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const renderThumbs = _ => {
    let markup = ''
    videos.forEach(video => {
      markup +=
       `<div>
          <img src="images/video/${video.image}.jpg" alt="${video.title}">
          <div style="background:rgba(255,255,255,0.85)">${video.title}</div>
        </div>`
    })
    thumbContainer.innerHTML = markup
    addThumbListeners()
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
    div.innerHTML = `<iframe src="https://www.youtube.com/embed/${videos[i].id}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
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