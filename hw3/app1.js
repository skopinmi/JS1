/*
С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 
включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

/**
 * проверка четное - нечетное
 * @param {number} number 
 * @returns boolean  true - четное ; число false - нечетное
 */
function evenOrOdd (number) {
    return !(number % 2) > 0;
}


for (let i = 0; i < 11; i++) {
    let result;
    if (i == 0) {
        result = "это ноль";
    } else if (evenOrOdd(i)){
        result = "четное число";
    } else {
        result = "нечетное число"
    }
    console.log (`${i} - ${result}`);
}    

/*  Выведите в консоль значения, указанные рядом с комментариями:

    const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
    {
    userId: 10,
    userName: "Alex",
    text: "lorem ipsum",
    rating: {
    likes: 10,
    dislikes: 2 //вывести это число
    }
    },
    {
    userId: 5, //вывести это число
    userName: "Jane",
    text: "lorem ipsum 2", //вывести этот текст
    rating: {
    likes: 3,
    dislikes: 1
    }
    },
    ]
    };
*/

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                        likes: 10,
                        dislikes: 2 //вывести это число
                    }
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {
                        likes: 3,
                        dislikes: 1
                    }
            },
        ]
    };
    console.log(post.author);
    console.log(post.comments[0].rating.likes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);

/*    Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 
15%, можете использовать метод forEach https://mzl.la/1AOMMWX : 
*/
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 * применяет скидку
 * @param {array} products массив товаров 
 * @param {number} discount скидка в процентах
 */
function salePrice(products, discount) {
    for (const product of products) {
        product.price = product.price - product.price * discount / 100;
    }
}
salePrice(products, 15);
console.log(products);

