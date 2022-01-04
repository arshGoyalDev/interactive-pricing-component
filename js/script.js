let slider = document.querySelector(".slider");
let price = document.querySelectorAll('.price');
let toggle = document.querySelector(".toggle");
let pageViews = document.querySelector(".pageviews");

// ---------------------- calculating the price ------------------------- //
toggle.addEventListener("click", amount);
toggle.addEventListener("click", sliderValue);

function amount(value){
  if (toggle.checked == true) {
    price[0].innerHTML = `$${value - ((25/100)*value)}.00`
    price[1].innerHTML = `$${value - ((25/100)*value)}.00`
  } else {
    price[0].innerHTML = `$${value}.00`;
    price[1].innerHTML = `$${value}.00`;
    }
}

// -------------------------- width of slider bar & page views -------------------------- //
function values(width, views) {
  let sliderBar = document.querySelector(".slider-bar");
  sliderBar.style.width = `${width}%`;
  pageViews.innerHTML = views;
}

// ------------------------ changing the value on input ----------------------- //
slider.addEventListener("input", sliderValue);

function sliderValue(){

  switch (slider.value) {
    case "20":
      amount(8);
      values(0, "10k");
      break;

    case "40":
      amount(12);
      values(30, "50k");
      break;

    case "60":
      amount(16);
      values(50, "100k");
      break;

    case "80":
      amount(24);
      values(70, "500k");
      break;

    case "100":
      amount(36);
      values(100, "1m");
      break;
  }
}