"use strict";
let basket = {};
let btnsAddToBasket = document.querySelectorAll("button#addToCart");
let countProduct = document.querySelector(".cartIconWrap span");
let basketEl = document.querySelector(".rightHeader");
let table = document.querySelector(".basket");

btnsAddToBasket.forEach(function (btn) {
    btn.addEventListener("click", addToBasket);
});

basketEl.addEventListener("mouseover", basketVisible);
basketEl.addEventListener("mouseout", basketInvisible);

function basketVisible() {
    table.style.display = "block";
}

function basketInvisible() {
    table.style.display = "none";
}

function addToBasket(event) {
    let newProductId = event.currentTarget.getAttribute("data-productId");
    if (!(newProductId in basket)){
        basket[newProductId] = 1;
    }else {
        basket[newProductId] += 1;
    }
    countProduct.textContent++;
}


