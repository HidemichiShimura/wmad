function addTotal(price) {
  const Price = Number(price);
  const TotalPriceElement = document.getElementById("total-price");
  const CurrTotalPrice = Number(TotalPriceElement.innerHTML);

  TotalPriceElement.innerHTML = CurrTotalPrice + Price;
}

function reduceTotal(id) {
  const Item = document.getElementById(`cart-item-${id}`);
  let Price = Item.getElementsByClassName("item-price");
  Price = Price[0].innerHTML.substring(1);
  Price = Number(Price);
  const TotalPriceElement = document.getElementById("total-price");
  const CurrTotalPrice = Number(TotalPriceElement.innerHTML);

  console.log(CurrTotalPrice, Price);

  TotalPriceElement.innerHTML = CurrTotalPrice - Price;
}

function addQty() {
  const QtyElement = document.getElementById("qty");
  const CurrQty = Number(QtyElement.innerHTML);

  QtyElement.innerHTML = CurrQty + 1;
}

function reduceQty() {
  const QtyElement = document.getElementById("qty");
  const CurrQty = Number(QtyElement.innerHTML);

  QtyElement.innerHTML = CurrQty - 1;
}

function clickCart() {
  const Cart = document.getElementById("cart-menu-container");
  const ClassList = Cart.classList;

  if (ClassList.contains("open")) {
    ClassList.remove("open");
  } else {
    ClassList.add("open");
  }
}

function clickRemove(id) {
  const Item = document.getElementById(`cart-item-${id}`);

  reduceQty();
  reduceTotal(id);
  Item.remove();
}

async function clickPurchase(id) {
  const ProductData = await getProductData(id);

  const Name = ProductData["name"];
  const Price = ProductData["price"];

  const CartMenu = document.querySelector(".cart-menu");
  const Li = document.createElement("li");
  const Div = document.createElement("div");
  const P1 = document.createElement("p");
  const P2 = document.createElement("p");
  const Btn = document.createElement("button");

  CartMenu.appendChild(Li);
  Li.appendChild(Div);
  Div.appendChild(P1);
  Div.appendChild(P2);
  Li.appendChild(Btn);

  Li.setAttribute("id", `cart-item-${id}`);
  Btn.setAttribute("type", "button");
  Btn.setAttribute("id", `${id}`);
  Btn.setAttribute("onclick", "clickRemove(this.id)");

  Li.classList.add("cart-item");
  Div.classList.add("item-description");
  P1.classList.add("item-name");
  P2.classList.add("item-price");
  Btn.classList.add("btn");
  Btn.classList.add("remove-btn");

  P1.innerHTML = Name;
  P2.innerHTML = `$${Price}`;
  Btn.innerHTML = "Remove";

  addTotal(Price);
  addQty();
  alert("Added to your cart");
}
