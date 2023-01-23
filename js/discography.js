import { albums } from './data/albums.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const renderThumbs = _ => {
    let markup = ''
    albums.forEach(album => {
      markup += `<img src="images/discography/${album.art}.jpg" width="1280" height="1280">`
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
        <img src="images/discography/${albums[i].art}.jpg">
        <div>
          <div class="title">${albums[i].title}</div>
          <div class="release">${albums[i].release}</div>
          <div class="tracklist">${tracklist(albums[i])}</div>
        </div>
      </div>`
    section.appendChild(div)
    addModalListener(div)
  }

  const tracklist = album => {
    let i = 0
    let markup = ''
    album.tracklist.forEach(track => {
      i = track.indexOf('•')
      if (i === -1) {
        markup += `<div>${track}</div>`
      }
      else {
        markup +=
         `<div>
            <span>${track.slice(0, i)}</span>
            <span class="author">${track.slice(i)}</span>
          </div>`
      }
    })
    return markup
  }

  const addModalListener = modal => {
    modal.addEventListener('click', _ => {
      modal.remove()
    })
  }

  renderThumbs()

})()