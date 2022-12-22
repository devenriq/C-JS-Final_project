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
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", () => {
  lastValue = lastValue + userInputNumber;

  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
  drawProductInModal();
  priceModal.innerHTML = `$125 x${lastValue} <span>$${
    lastValue * 125
  }.00</span>`;
});

// mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
const productContainer = document.querySelector(
  ".cart-modal__checkout-container"
);
// let priceModal = document.querySelector(".cart-modal__price");

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show");

  if (lastValue == 0) {
    drawProductInModal();
  }
});

// Borrar el contenido del carrito

function deleteProduct() {
  const deleteProductBtn = document.querySelector(".cart-modal__delete");

  deleteProductBtn.addEventListener("click", () => {
    productContainer.innerHTML = "<p class='cart-empty'>Your cart is empty</p>";
    lastValue = 0;
    cartNotification.innerText = lastValue;
  });
}

// Cambiar imágenes cuando se presionen los botones flecha
const imageContainer = document.querySelector(".gallery__image-container");
const previusGalleryBtn = document.querySelector(".gallery__previus");
const nextGalleryBtn = document.querySelector(".gallery__next");

const imagesUrls = [
  "./assets/img/image-product-1.jpg",
  "./assets/img/image-product-2.jpg",
  "./assets/img/image-product-3.jpg",
  "./assets/img/image-product-4.jpg",
];

// Funciones

const drawProductInModal = () => {
  productContainer.innerHTML = `
    <div class="cart-modal__details-container">
      <img
        class="cart-modal__image"
        src="./assets/img/image-product-1-thumbnail.jpg"
        alt="thumbnail"
      />
      <div>
        <p class="cart-modal__product">Autum Limited Edition...</p>
        <p class="cart-modal__price">$125 x 3 <span>$375.00</span></p>
      </div>
      <img
        class="cart-modal__delete"
        src="./assets/img/icon-delete.svg"
        alt="delete"
      />
    </div>
    <button class="cart-modal__checkout">Checkout</button>`;

  deleteProduct();
  let priceModal = document.querySelector(".cart-modal__price");

  priceModal.innerHTML = `$125 x${lastValue} <span>$${
    lastValue * 125
  }.00</span>`;
};
