/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}

// Mobile Menu Toggle functionality
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
//filter grid
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}
let http = new XMLHttpRequest();
// sets the http method - GET .- pass json file - async.
http.open('get', 'review.json', true);
//server send file
http.send();
//catch response
http.onload = function(){
  //check for sucsessful response
   if(this.readyState == 4 && this.status == 200){
    //convert to JS object
      let reviews = JSON.parse(this.responseText);
      //empty vairable
      let output = "";
      //loopthrough reviews 
      for(let item of reviews){
         output += `
            <div class="review">
               <p class="message">${item.message}</p>
               <img src="${item.image}" alt="${item.userName}">
               <p class="userName">${item.userName}</p>
               <p class="title">${item.title}</p>
            </div>
         `;
      }
      //target container add the data that output variable holds.
      document.querySelector(".reviews").innerHTML = output;
   }
}
