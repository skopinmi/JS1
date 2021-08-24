"use strict";
class Product {
    constructor (id, img, name, text, price){
        this.id = id;
        this.img = img; 
        this.name = name;
        this.text = text;
        this.price = price;
    } 
}

let products = [
    new Product(
        1,
        "images/featured/1.jpg",
        "ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        52.22,
    ),
    new Product(
        2,
        "images/featured/2.jpg",
        "ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        52.22,
    ),
    new Product(
        3,
        "images/featured/3.jpg",
        "ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        52.22,
    ),
    new Product(
        4,
        "images/featured/4.jpg",
        "ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        52.22,
    ),
    new Product(
        5,
        "images/featured/5.jpg",
        "ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        52.22,
    ),
    new Product(
        6,
        "images/featured/6.jpg",
        "ELLERY X M'O CAPSULE",
        "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        52.22,
    ),
];

let items = document.querySelector(".featuredItems");

function createHTMLOneItem (product) {
    return `<div class="featuredItem" data-productId="${product.id}">

                <div class="featuredImgWrap">
                    <img src="${product.img}" alt="">
                    <div class="featuredImgDark">
                        <button id ="addToCart" data-productId="${product.id}">
                            <img src="images/cart.svg" alt="">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div class="featuredData">
                    <div class="featuredName">
                        ${product.name}
                    </div>
                    <div class="featuredText">
                        ${product.text}
                    </div>
                    <div class="featuredPrice">
                        ${product.price}
                    </div>
                </div>

            </div>`
}

function renderItems(products) {
    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += createHTMLOneItem(products[i]);
    }
    items.insertAdjacentHTML("afterbegin", result);     
}

renderItems(products);
