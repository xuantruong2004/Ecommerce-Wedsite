const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const addCart = document.querySelectorAll(".pro-cart");

// console.log(addCart);
addCart.forEach((cart) => {
  cart.addEventListener("click", (e) => {
    let cartParent = cart.parentElement;
    let img = cartParent.querySelector("img").src;
    let brand = cartParent.querySelector("span").innerText;
    let nameProduction = cartParent.querySelector("h5").innerText;
    let price = cartParent.querySelector("h4").innerText;

    cartList(img, brand, nameProduction, price);
    e.preventDefault();
  });
});

const cartList = (img, brand, nameProduction, price) => {
  const elementTbody = document.querySelector("tbody");

  const trAdd = document.createElement("tr");
  trAdd.classList.add("tr");
  const textHtml = `
        <td><a href="#"> <i class="far fa-times-circle"></i></a></td>
        <td><img src=${img} alt="" /></td>
        <td>${nameProduction}</td>
        <td>${price}</td>
        <td><input type="number" value="1" /></td>
        <td>${price}</td>`;
  trAdd.innerHTML = textHtml;
  console.log(trAdd);
  elementTbody.appendChild(trAdd);
};
