const numbers = [4, 5, 6, 7, 8, 9, 10]
const output = []

function multiplyByTwo(num) {
    return num * 2
}

for (const number of numbers) {
    result = multiplyByTwo(number)
    output.push(result)
}

console.log("By using General function", output);

//using arrow functions
const numbers2 = [4, 5, 6, 7, 8, 9, 10]
const output2 = []
const multiplyByTwo_2 = num => num * 2

for (const number of numbers2) {
    const result = multiplyByTwo_2(number)
    output2.push(result)
}
console.log("By using Arrow function", output2);
// using map
const output3 = numbers2.map(multiplyByTwo_2)
console.log("By using map function", output3);

const squares = numbers2.map(x => x * x)
console.log("By using map function", squares);
