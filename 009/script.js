const toggler = document.getElementById('toggler')
toggler.onclick = () => toggleMenu()

const toggleMenu = () => {
  const nav = document.getElementById('main-nav')
  const content = document.getElementById('content')
  nav.classList.toggle('open')
  content.classList.toggle('open')
}
