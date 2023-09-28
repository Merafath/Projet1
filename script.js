// active list click function navbar

const navbarList = document.querySelectorAll("a");
let activeTab;

navbarList.forEach(list =>{
    list.addEventListener('click', function(){
        if (activeTab) activeTab.classList.remove("active");
        activeTab = list;
        activeTab.classList.add("active")
     

    });
});





// carousel function


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

}

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

}

//Main function


//function changeColorBody () {
   // const background = document.querySelector('.changeColor');
    //background.style.backgroundColor = 'white';
//}   

//const backgroundBody = document.querySelector('.container');
//backgroundBody.addEventListener(click, changeColorBody);




//barre de recherche

function search_wilder() {
    let input = document.getElementById('search-bar-input').value;
    input=input.toLowerCase();
    let wilders = document.getElementsByClassName('people');

      
    for (i = 0; i < wilders.length; i++) { 
        if (wilders[i].innerHTML.toLowerCase().includes(input)) {
            wilders[i].style.display="";
        }
        else {
            wilders[i].style.display="none";            
        }
    }
}

