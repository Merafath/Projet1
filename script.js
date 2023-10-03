import wildersArray from './wilders.js';
import wilderCard from './card_wilder.js';

// Sticky navbar

    window.addEventListener("scroll", function() {
        var header = this.document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);

    });

// active list click function navbar

/* const navbarList = document.querySelectorAll("a");
let activeTab;

navbarList.forEach(list =>{
    list.addEventListener('click', function(){
        if (activeTab) activeTab.classList.remove("active");
        activeTab = list;
        activeTab.classList.add("active")
     

    });
}); */
   

// carousel function

const prevbutton=document.querySelector(".slider__nav__button__prev")
function previous() {
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider__content');
    sliderContent.scrollLeft -= widthSlider;
    const scrollLeft = sliderContent.scrollLeft;
    const itemsSlider = sliderContent.querySelectorAll('.slider__content__item');

    if(scrollLeft == widthSlider) {
        document.querySelector('.slider__nav__button__prev').style.display = 'none';
    } else {
        document.querySelector('.slider__nav__button__next').style.display = 'block';
    }

};
prevbutton.addEventListener("click", previous);
const nextbutton=document.querySelector(".slider__nav__button__next")
function next() {
    const widthSlider = document.querySelector('.slider').offsetWidth;
    const sliderContent = document.querySelector('.slider__content');
    sliderContent.scrollLeft += widthSlider;
    const scrollLeft = sliderContent.scrollLeft;
    const itemsSlider = sliderContent.querySelectorAll('.slider__content__item');

    if(scrollLeft == widthSlider * (itemsSlider.length - 2)) {
       document.querySelector(' .slider__nav__button__next').style.display = 'none';
    } else {
        document.querySelector('.slider__nav__button__prev').style.display = 'block';
    }

};
nextbutton.addEventListener("click", next);

//Main function
const overlay = document.getElementById("overlay");
const people = document.querySelectorAll(".media-imgs");
let span = document.getElementsByClassName("close")[0];


for (let i=0; i<people.length; i++){
    people[i].addEventListener("click", function(){
        overlay.style.display = "block";
        setTimeout(function () {
        overlay.style.opacity = "1";
    },10);
    overlay.innerHTML = wilderCard(wildersArray[i]);
       
        
});

overlay.addEventListener("click", function () {
    overlay.style.opacity = "0";
    setTimeout(function () {
        overlay.style.display = "none";
    }, 300);
});
}







//barre de recherche
const searchEl = document.querySelector('#search-bar-input');
function search_wilder() {
    let input = searchEl.value;
    input=input.toLowerCase();
    let wilders = document.getElementsByClassName('people');

      
    for (let i = 0; i < wilders.length; i++) { 
        if (wilders[i].innerHTML.toLowerCase().includes(input)) {
            wilders[i].style.display="";
        }
        else {
            wilders[i].style.display="none";            
        }
    }
};

searchEl.addEventListener('keyup', search_wilder);




//Formulaire de contact




