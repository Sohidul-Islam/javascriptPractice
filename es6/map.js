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

// using more map

const myObject = [
    { name: "Sohidul islam", id: "CSE01806649", dep: "CSE" },
    { name: "Kaium Uddin", id: "CSE01806657", dep: "CSE" },
    { name: "Shahadat Hossain", id: "CSE01806650", dep: "CSE" },
    { name: "Owahidul Hoque Chowdhury", id: "CSE01806652", dep: "CSE" },
]

const myObjectMap1 = myObject.map(student => student.name)
const myObjectMap2 = myObject.map((value, key) => "Name: " + value.name + " ID: " + value.id)

console.log(myObjectMap1);
console.log(myObjectMap2);