import { albums } from './data/albums.js'

(function() {

  const section = document.querySelector('section')
  const thumbContainer = document.querySelector('.thumb-container')

  const renderThumbs = _ => {
    let markup = ''
    albums.forEach(album => {
      markup += `<img src="images/discography/${album.art}.jpg">`
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
    let markup = ''
    album.tracklist.forEach(track => {
      if (track.includes('•')) {
        markup +=
         `<div>
            <span>${track.substring(0, track.indexOf('•'))}</span>
            <span class="author">${track.slice(track.indexOf('•'))}</span>
          <div>`
      }
      else {
        markup += `<div>${track}</div>`
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