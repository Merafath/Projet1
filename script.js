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
7µ£



//barre de recherche

function search_wilder() {
    let input = document.getElementById('search-bar').value;
    let x = document.getElementsByClassName('people');

      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].outerHTML.includes(input)) {
            x[i].style.display="none";
            console.log("marche pas")
        }
        else {
            console.log("test")              
        }
    }
}

