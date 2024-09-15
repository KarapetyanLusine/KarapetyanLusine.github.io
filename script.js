document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const thumbnails = document.querySelectorAll('.thumbnails img');
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${slideIndex * 100}%)`;
        });
        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active-thumbnail', i === slideIndex);
        });
    }

    function moveSlide(step) {
        slideIndex += step;
        showSlide(slideIndex);
    }

    function currentSlide(index) {
        slideIndex = index;
        showSlide(slideIndex);
    }

    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));

    document.querySelectorAll('.thumbnails img').forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => currentSlide(index));
    });

    showSlide(slideIndex);
}
);


const dropDownMenu = document.querySelectorAll(".dropDownMenuLi")
let allIcons = document.getElementsByClassName('icon');
let showMenu = document.querySelectorAll(".dropDownMenu")

for (let i = 0; i < dropDownMenu.length; i++) {
    dropDownMenu[i].addEventListener('click', function() {
        if (allIcons[i].classList.contains('fa-angle-down')){
            allIcons[i].classList.remove('fa-angle-down');
            allIcons[i].classList.add('fa-angle-up')
        } else {
            allIcons[i].classList.add('fa-angle-down');
            allIcons[i].classList.remove('fa-angle-up')

        }
    })}
        for (let i = 0; i < showMenu.length; i++) {
            dropDownMenu[i].addEventListener('click', function() {
                if (showMenu[i].style.display === "block"){
                    showMenu[i].style.display = "none";                  
                    
                } else {
                    showMenu[i].style.display = "block";
                }
                   
        
         } )
        }

     window.addEventListener('scroll', function() {
      let showSticky = document.getElementById('showSticky');
      if (window.scrollY > 700) { 
        showSticky.classList.add('visible');
      } else {
        showSticky.classList.remove('visible');
      }
    });

    

  

 

  
