// Cambio de cantidad de artículos ingresado por el usuario

let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

let userInputNumber = 0;

plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
});

minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
});

// Agregar a carrito de productos
const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");

console.log(addToCartBtn);

addToCartBtn.addEventListener("click", () => {
  let lastValue = parseInt(cartNotification.innerText);
  lastValue = lastValue + userInputNumber;

  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
});

// mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show");
});
