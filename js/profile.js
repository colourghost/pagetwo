import { members } from './data/members.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const mountThumbs = _ => {
    let markup = ''
    members.forEach((member, index) => {
      markup += `<img id="${index}" alt="${member.name}" width="2668" height="4000">`
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
    div.innerHTML =
     `<div class="grid-container">
        <img src="images/profile/${members[i].name}.webp" alt="${members[i].name}">
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

  const renderImages = (i = 0) => {
    if (i < members.length) {
      let image = document.getElementById(i)
      image.src = `images/profile/${members[i].name}.webp`
      image.addEventListener('load', _ => {
        image.style.opacity = 1
        renderImages(++i)
      })
    }
  }

  mountThumbs()

})()