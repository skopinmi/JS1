"use strict";
let basket = {};
let btnsAddToBasket = document.querySelectorAll("button#addToCart");
let countProduct = document.querySelector(".cartIconWrap span");
let basketEl = document.querySelector(".rightHeader");
let table = document.querySelector(".basket");
let tableHTML = "<table class=\"table\"><tr> <th>Название товара</th>"+
"<th>Количество</th><th>Цена за шт.</th><th>Итого</th></tr>"
let totalPrice = 0;

btnsAddToBasket.forEach(function (btn) {
    btn.addEventListener("click", addToBasket);
});

basketEl.addEventListener("mouseenter", basketVisible);
basketEl.addEventListener("mouseleave", basketInvisible);

function basketVisible() {
    table.style.display = "block";
    basketRender();
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
    basketRender();
}

function basketRender() {
    let dataHTML = "";
    for(let product in basket) {
        dataHTML  += renderOneItems(product);
    }
    calculateTotalePrice();
    let totalPriceHTML = ` </table>
    <table class="totalprice">
        <tr>
            <th>Товаров в корзине на сумму:</th>
            <th id="total">${totalPrice}</th>
        </tr>
    </table>`
    table.innerHTML = tableHTML + dataHTML + totalPriceHTML ;
}

function renderOneItems(product) {
    return `<tr>
    <td>${products[product-1].name}</td>
    <td>${basket[product]}</td><td>${products[product-1].price}</td>
    <td>${priceOneProductInBasket(product)}</td></tr>`
}

function priceOneProductInBasket(product) {
    return (basket[product] * products[product-1].price).toFixed(2);
}

function calculateTotalePrice() {
    totalPrice = 0;
    for (let product in basket) {
        totalPrice  += basket[product] * products[product-1].price;
    }
    return totalPrice.toFixed(2);
}



