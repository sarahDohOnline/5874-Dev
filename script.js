
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// const navItems = document.querySelectorAll('.navbar__item')

// function setActive(e){
//   const parent = e.target.parentNode
//   const active = parent.querySelector('.active')
//   if(active){
//     active.classList.toggle('active')
//   }
//   e.target.classList.add('active')
// }

navItems.forEach(listItem => {
  listItem.addEventListener("click", setActive)
})

