// Normal Function
function addNumber(first: number, second: number): number {
    const result = first + second;
    return result;
}
console.log(addNumber(34, 26));

// Arrow Function
const sumNumber = (first: number, second: number): number => first + second;

// Arrow Function Without Return
const anotherArrow = (): void => {
    console.log("Hello World!");
}