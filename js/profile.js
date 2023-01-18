import { members } from './data/members.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const renderThumbs = _ => {
    let markup = ''
    members.forEach(member => {
      markup += `<img src="images/profile/${member.name}.jpg">`
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
    div.innerHTML =
     `<div class="grid-container">
        <img src="images/profile/${members[i].name}.jpg">
        <div class="bio">
          <div class="name">${members[i].name}</div>
          <div class="birth">${members[i].birth}</div>
          <div class="nation">${members[i].nation}</div>
        </div>
        <iframe src="https://www.youtube.com/embed/${members[i].id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>`
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