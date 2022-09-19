
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});



navItems.forEach(listItem => {
  listItem.addEventListener("click", setActive)
})

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav-bar").style.top = "0";
//   } else {
//     document.getElementById("nav-bar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }