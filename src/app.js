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
    productContainer.innerHTML = "<p class='cart-empty'>Your cart is empty</p>";
  } else {
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
const previousGalleryBtn = document.querySelector(".gallery__previus");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;

const imagesUrls = [
  "./assets/img/image-product-1.jpg",
  "./assets/img/image-product-2.jpg",
  "./assets/img/image-product-3.jpg",
  "./assets/img/image-product-4.jpg",
];

nextGalleryBtn.addEventListener("click", () => {
  changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener("click", () => {
  changePreviousImage(imageContainer);
});

// Mostrar modal de imágenes cuando hago click en la imagen principal
const imagesModal = document.querySelector(".modal-gallery__background");
const closeModalBtn = document.querySelector(".modal-gallery__close");

imageContainer.addEventListener("click", () => {
  imagesModal.style.display = "grid";
});

closeModalBtn.addEventListener("click", () => {
  imagesModal.style.display = "none";
});

//Cambiar imágenes principales desde thumbnails

let thumbnails = document.querySelectorAll(".gallery__thumbnail");
thumbnails = [...thumbnails];

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    imageContainer.style.backgroundImage = `url("./assets/img/image-product-${e.target.id}.jpg")`;
  });
});

//Cambiar imágenes principales desde thumbnails en el modal

let modalThumbnails = document.querySelectorAll(".modal-gallery__thumbnail");
const modalImageContainer = document.querySelector(
  ".modal-gallery__image-container"
);
modalThumbnails = [...modalThumbnails];
modalThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    modalImageContainer.style.backgroundImage = `url("./assets/img/image-product-${e.target.id.slice(
      -1
    )}.jpg")`;
  });
});

// Cambiar imagen principal de modal desde flechas de modal

const nextModalBtn = document.querySelector(".modal-gallery__previus");
const previousModalBtn = document.querySelector(".modal-gallery__next");

nextModalBtn.addEventListener("click", () => {
  changeNextImage(modalImageContainer);
});

previousModalBtn.addEventListener("click", () => {
  changePreviousImage(modalImageContainer);
});

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

const changeNextImage = (imgContainer) => {
  if (imgIndex == 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }
  imgContainer.style.backgroundImage = `url("./assets/img/image-product-${imgIndex}.jpg")`;
};

const changePreviousImage = (imgContainer) => {
  if (imgIndex == 1) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url("./assets/img/image-product-${imgIndex}.jpg")`;
};
