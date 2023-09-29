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

// Sticky navbar

    window.addEventListener("scroll", function() {
        var header = this.document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);

    })

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
const overlay = document.getElementById("overlay");
const people = document.querySelectorAll(".media-imgs");
let span = document.getElementsByClassName("close")[0];

for (let i=0; i<people.length; i++){
    people[i].addEventListener("click", function(){
        overlay.style.display = "block";
        setTimeout(function () {
        overlay.style.opacity = "1";
    },10);
    
 
});

overlay.addEventListener("click", function () {
    overlay.style.opacity = "0";
    setTimeout(function () {
        overlay.style.display = "none";
    }, 300);
});
}







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



//Infos wilders


function infosWilders() {
    const wilders = document.getElementsByClassName('people');
    const content = document.getElementsByClassName('overlay-content');
    
    for (let i = 0; i < wilders.length; i++) {
        if (wilders[i].addEventListener('click'), function() {
            wilders[i].innerHTML.style.display = "";
            content.style.display = "block";
        });
    };
};


//Formulaire de contact

const openContactButtons = document.querySelectorAll('[data-contact-target]')
const closeContactButtons = document.querySelectorAll('[data-close-button]')
const overlayContact = document.getElementById('overlay-contact')

openContactButtons.forEach(button => {
    button.addEventListener('click' , () => {
        const contact = document.querySelector(button.dataset.contactTarget)
        openContact(contact);
    })
})

closeContactButtons.forEach(button => {
    button.addEventListener('click' , () => {
        const contact = button.closest('.contact')
        closeContact(contact);
    })
})

function openContact(contact) {
    if (contact == null) return
    contact.classList.add('active-contact');
    overlayContact.style.display = "block" ;
}

function closeContact(contact) {
    if (contact == null) return
    contact.classList.remove('active-contact');
    overlayContact.style.display = "none";
}



