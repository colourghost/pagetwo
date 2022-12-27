(function() {

  document.querySelector('.hamburger').addEventListener('click', _ => {
    document.querySelector('.mobile-nav').classList.toggle('bg-white')
    document.querySelector('.menu').classList.toggle('active')
  })

})()