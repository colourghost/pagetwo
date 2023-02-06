(function() {

  const markup =
   `<a href="profile.html">PROFILE</a>
    <a href="discography.html">DISCOGRAPHY</a>
    <a href="gallery.html">GALLERY</a>
    <a href="choreography.html">CHOREOGRAPHY</a>
    <a href="video.html">VIDEO</a>`

  document.querySelector('.desktop').innerHTML = markup
  document.querySelector('.menu').innerHTML = markup

  document.querySelector('.hamburger').addEventListener('click', _ => {
    document.querySelector('.menu').classList.toggle('active')
  })

})()