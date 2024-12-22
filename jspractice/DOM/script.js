/*function abcd() {
    console.log("chawal");
    var s = 12;
    console.log(s);
    for (var b = 12; b < 20; b++){
        console.log("hello world");
    }
}

abcd();
abcd();*/
/*var users = ["sagar" , "hemu" , "guru" , "dev"];


users.forEach(function(chacha){
console.log(chacha);

});

var person ={
    name:"duggu" ,
    age: 22,
    add: "delhi" ,
    pincode: "460337" ,
};

person.name;*/

//call, apply, bind 
//ye teeen tarike h function ko call krne k kisi object ko this maan kr
/*const obj = {name: "sagar"}

function abcd(a,b,c){
    console.log(this);
}
const baadmein = abcd.bind(obj)

baadmein()*/

//prototypal inheritance
//ek function jo this ka upyog kar raha ho and new ke dwaara naye naye objects bana kar deta ho aisa function ko constructor function kehte hai

/*
function makehuman(name, age){
    this.name = name;
    this.age = age;
}
makehuman.prototype.printmyname = function
(){
    console.log(this.name);
}

var ans = new makehuman("sagar", 35);
var ans1 = new makehuman("harsh", 45)
*/

// aisa koi bhi function jisme aapne this ka upyog kiya ho or us function ko call karte waqt new ka uoyog kiya, mtlb waha pr ek blank object{} honga. 
//--------------------------------
// closures
// ek function jo return kare dusra function, aur use kare  parent function ka koi variable

/*function abcd(){
    var a = 12;
    return function(){
        console.log(a);
    }
}
abcd();
*/

//event delegation = jab aap event listener se kai saare different elements ke events ko handle kr sake 
//event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karke different task karao

/*var parent = document.querySelector("#parent");

parent.addEventListener("click", function(details){
    if(details.target.id === "play"){
        console.log("play song");
    }
    else if(details.target.id === "pause"){
        console.log("pause song");
    }
})
*/

//error handling like pro - try catch

function divide(a,b){
    try{
        if(b === 0 , b>a){
            throw Error("koi gadbad hai");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err);
    }
}
divide(12,15);