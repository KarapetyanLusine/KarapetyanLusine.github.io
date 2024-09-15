let countDownDate = new Date("Oct 5, 2024 10:30:25").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();
    
  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let allHours = (days * 24) + hours
    
  document.getElementById("hours").innerHTML = allHours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("seconde").innerHTML = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);

function checkRadio() {
  
  let radios = document.getElementsByName("option");
  let productSale = document.querySelectorAll(".productSale");

  for (var i = 0; i < productSale.length; i++) {
    productSale[i].classList.remove("checkedStyle");
  }

  for(let i = 0; i<radios.length; i++) {
    if (radios[i].checked) {
      productSale[i].classList.add("checkedStyle");
      return      
      
    } else {
      productSale[i].classList.remove("checkedStyle");
    }
  }  
}

  

 

  
