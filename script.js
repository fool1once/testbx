function showSection(id){

document.querySelectorAll(".section").forEach(section=>{
section.classList.remove("active");
});

document.getElementById(id).classList.add("active");

}

function toggleMenu(){
document.getElementById("sideMenu").classList.toggle("active");
}


/* INTRO */

window.addEventListener("load",function(){

setTimeout(function(){
document.getElementById("intro").classList.add("intro-hide");
},3000);

});


/* SCROLL ANIMATION */

function reveal(){

var reveals=document.querySelectorAll(".reveal");

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight;
var elementTop=reveals[i].getBoundingClientRect().top;
var visible=100;

if(elementTop < windowHeight - visible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",reveal);
reveal();
