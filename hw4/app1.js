'use strict'
/*
Написать функцию, преобразующую число в объект. Передавая на 
вход число в диапазоне [0, 999],
{
 units: 5, //это единицы
 tens: 4, //это десятки
 hundreds: 0, //это сотни
}
*/

function numberToObject(number) {
    let result = {};
    if (!Number.isInteger(number/1) || number > 999 || number < 0){
        console.log('число было передано вне [0, 999] диапазона, не целое число или вообще не число');
        return result;
    }
    result.hundreds = Math.floor(number/100);
    result.tens = Math.floor((number - result.hundreds * 100)/10);
    result.units = number - result.hundreds * 100 - result.tens * 10;
    return result;
};
  
console.log(numberToObject(prompt('введите число от 0 до 999')));

/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных 
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод 
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод 
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный 
объект-прототип (как объект transport в уроке)
*/
// js5
// function Product (name, price) {
//     this.name = name;
//     this.price = price;
// };
// Product.prototype.make25PercentDiscount = function () {
//     this.price = this.price * (100 - 25) / 100;
// };

// js6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * (100 - 25) / 100;
    }
}

let product = new Product('product1', '100');
console.log(product); 
product.make25PercentDiscount();
console.log(product);    


/*
(это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных 
видео -> 3 примеры наследования -> механика наследования), 
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты 
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с 
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться 
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству 
highlighted значение true
*/

// js5
// function Post (author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;    
// };

// Post.prototype.edit = function (text) {
//     this.text = text;
// };

// function AttachedPost(author, text, date) {
//     Post.call(this, author, text, date)
//     this.highlighted = false;
// }

// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;

// AttachedPost.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;    
// };

// js6
class Post {
    constructor (author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor (author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true; 
    }
}

let attachedPost = new AttachedPost("author", "this is car", "1.02.2021");
console.log(attachedPost);
attachedPost.edit("12345");
attachedPost.makeTextHighlighted();
console.log(attachedPost);