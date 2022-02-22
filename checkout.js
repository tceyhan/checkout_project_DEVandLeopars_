//Checkout

let products = document.querySelectorAll(".product");
let btnPlus = document.querySelectorAll(".fa-plus");
let btnMinus = document.querySelectorAll(".fa-minus");
let btnRemove = document.querySelectorAll(".remove-product");

let subTotal = document.getElementById("cart-subtotal");
let tax = document.getElementById("cart-tax");
let shipping = document.getElementById("cart-shipping");
let total = document.getElementById("cart-total");

let subTotal_value = 146.96;
let tax_value = 26.45;
let shipping_value = 15.0;
let total_value = 188.91;

let backBag = 25.98;
let shoes = 45.99;
let clock = 74.99;

btnPlus.forEach(event => {
    event.addEventListener("click",(e) => {
        let artış = e.target.parentElement.parentElement.children[1].innerHTML++;

        console.log(artış);

        e.target.parentElement.parentElement.parentElement.querySelector(".product-line-price").innerHTML = parseFloat(e.target.parentElement.parentElement.parentElement.querySelector("strong").innerHTML * (artış + 1)).toFixed(2);

        subTotal_value += parseFloat(e.target.parentElement.parentElement.parentElement.querySelector("strong").innerHTML);

        subTotal.children[1].innerHTML = subTotal_value.toFixed(2);
    })
},false)


console.log(btnPlus);