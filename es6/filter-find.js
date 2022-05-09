const product = [10, 11, 12, 13, 14, 15, 16, 17]

const result = product.filter(x => x > 14)
const result2 = product.find(x => x > 14)

console.log(result);
console.log(result2);


const myObject = [
    { name: "Sohidul islam", id: "CSE01806649", dep: "CSE" },
    { name: "Kaium Uddin", id: "CSE01806657", dep: "EEE" },
    { name: "Shahadat Hossain", id: "CSE01806650", dep: "EEE" },
    { name: "Owahidul Hoque Chowdhury", id: "CSE01806652", dep: "CSE" },
]

const result3 = myObject.filter(x => x.dep == "CSE")
const result4 = myObject.find(x => x.dep == "CSE")

console.log(result3);
console.log(result4);