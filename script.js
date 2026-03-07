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
},3200);

});


/* SCROLL FADE EFFECT */

const fadeElements=document.querySelectorAll(".fade-scroll");

function checkFade(){

const trigger=window.innerHeight * 0.85;

fadeElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top < trigger){
el.classList.add("visible");
}else{
el.classList.remove("visible");
}

});

}

window.addEventListener("scroll",checkFade);
checkFade();
