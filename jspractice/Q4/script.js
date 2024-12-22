var home = document.querySelector('#home');
var about = document.querySelector('#about');
var contact = document.querySelector('#contact');


var hometext = document.querySelector('#hometext');
var abouttext = document.querySelector('#abouttext');
var contacttext = document.querySelector('#contacttext');


home.addEventListener("click" , function(){
     saaretexthatao();
    hometext.style.display = "initial";
hometext.style.width = "50%";
})

about.addEventListener("click" , function(){
     saaretexthatao();
    abouttext.style.display = "initial";
abouttext.style.width = "50%";
})

contact.addEventListener("click" , function(){
     saaretexthatao();
    contacttext.style.display = "initial";
contacttext.style.width = "50%";
})

function saaretexthatao(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}
        
  