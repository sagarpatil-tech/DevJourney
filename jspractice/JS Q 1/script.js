var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("click", function(){
    p.textContent = "hey hello";
})
btn.addEventListener("mouseover", function(){
    p.textContent = "hey mister";
})