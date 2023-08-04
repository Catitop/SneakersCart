const buttonStartAnimation = document.querySelector(".start_animation");
const divContainer = document.querySelector(".container_cart");
const contentCart = document.querySelector(".content_cart");
const finalPrice = document.querySelector(".final_price");
const removeItemButton = document.querySelector(".remove_item_button")
let isOpen = false;
let itemsString = "";
let countFinalPrice = 0;

let cartItems = [
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

function resetOnScreen() {
  itemsString = "";
  countFinalPrice = 0;
};

function removeItem(id) {
  cartItems = cartItems.filter((item) => {
    return item.id !== id
  } )
  resetOnScreen()
  onShowOnScreenElements()

  };

function showItem(item) {
  itemsString =
    itemsString +
    `
    <div>${item.name}</div>
    <div>${item.price}</div>
    <button class="remove_item_button" onclick="removeItem(${item.id})"><img src="/assets/trash png.jpg" alt="Trash">
    <span>Remove</span></button>
    <br />
  `;

  countFinalPrice = Number(item.price) + countFinalPrice;
}

function onShowOnScreenElements() {
  cartItems.forEach(showItem);
  contentCart.innerHTML = itemsString;
  finalPrice.innerHTML = `Total: ${countFinalPrice}`;
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