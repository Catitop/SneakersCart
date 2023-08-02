const buttonStartAnimation = document.querySelector(".start_animation");
const divContainer = document.querySelector(".container_cart");
const contentCart = document.querySelector(".content_cart");
const finalPrice = document.querySelector(".final_price");
let isOpen = false;
let itemsString = "";
let countFinalPrice = 0;

const cartItems = [
  {
    id: 0,
    name: "Jordan",
    price: "400",
  },
  {
    id: 1,
    name: "Yeezy",
    price: "2000",
  },
  {
    id: 2,
    name: "Pulma disk",
    price: "400",
  },
  {
    id: 3,
    name: "Nike shocks",
    price: "600",
  },
];

function showItem(item) {
  itemsString =
    itemsString +
    `
    <div>${item.name}</div>
    <div>${item.price}</div>
    <br />
  `;

  countFinalPrice = Number(item.price) + countFinalPrice;
}

function onShowOnScreenElements() {
  cartItems.forEach(showItem);
  contentCart.innerHTML = itemsString;
  finalPrice.innerHTML = countFinalPrice;
}

const openOrCloseCart = () => {
  if (!isOpen) {
    divContainer.classList.remove("container_cart_start_close_animation");
    divContainer.classList.add("container_cart_start_open_animation");
    divContainer.style.right = 0;
    onShowOnScreenElements();

    isOpen = true;

    return;
  }

  divContainer.classList.remove("container_cart_start_open_animation");
  divContainer.classList.add("container_cart_start_close_animation");
  divContainer.style.right = "-42rem";
  isOpen = false;
};