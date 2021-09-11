"use strict";
// Normal Function
function addNumber(first, second) {
    const result = first + second;
    return result;
}
console.log(addNumber(34, 26));
// Arrow Function
const sumNumber = (first, second) => first + second;
// Arrow Function Without Return
const anotherArrow = () => {
    console.log("Hello World!");
};
