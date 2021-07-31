/*
    Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя 
    параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их 
    и возвращать результат.
    Обязательно использовать оператор return
*/
/**
 * сложение
 * @param {number} number1 первое слагаемое 
 * @param {number} number2 второе слогаемое
 * @returns сумма
 */
function addition (number1 , number2) {
    return number1 + number2;
}

/**
 * вычитание
 * @param {number} number1 уменьшеемое
 * @param {number} number2 вычитаемое
 * @returns разность
 */
function subtraction (number1 , number2) {
    return number1 - number2;
}
/**
 * умноежение
 * @param {number} number1 множимое 
 * @param {number} number2 множитель
 * @returns произведение
 */
function multiplication (number1 , number2) {
    return number1 * number2;
}

/**
 * деление
 * @param {number} number1 делимое
 * @param {number} number2 делитель
 * @returns частное
 */
function division (number1 , number2) {
    return number1 / number2;
}

/*
    5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
    где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
    переданного значения операции (использовать switch) выполнить одну из арифметических 
    операций
    (использовать функции из задания 4) и вернуть полученное значение.
*/
function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case "addition": {
            return addition(arg1, arg2);
        }
        case "subtraction": {
            return subtraction(arg1, arg2);
        } 
        case "multiplication": {
            return multiplication(arg1, arg2);
        } 
        case "division": {
            return division(arg1, arg2);
        }
        default: {
            throw new Error("Вы ввели неверное название операции");
        }
    }
}

console.log(mathOperation(20, 2, "division"));