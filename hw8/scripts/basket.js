"use strict";
let basket = {};
let btnsAddToBasket = document.querySelectorAll("button#addToCart");
let countProduct = document.querySelector(".cartIconWrap span");

btnsAddToBasket.forEach(function (btn) {
    btn.addEventListener("click", addToBasket);
});

function addToBasket(event) {
    let newProductId = event.currentTarget.getAttribute("data-productId");
    if (!(newProductId in basket)){
        basket[newProductId] = 1;
    }else {
        basket[newProductId] += 1;
    }
    countProduct.textContent++;
}


