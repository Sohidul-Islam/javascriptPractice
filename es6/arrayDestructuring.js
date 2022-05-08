// declare variable based on the name of an object property

const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 }
const { x, b, a } = myObject;
console.log("Destructring: ", x);
console.log("Destructring: ", b);
console.log("Destructring: ", a);

// Destructring array 

const [p, q] = [45, 37]
const [r, s] = [90, 70, 10, 84]
const [t, ...u] = [90, 70, 10, 84]

console.log("Array Destructring: ", p, " and ", q);
console.log("Array Destructring: ", r, " and ", s);
console.log("Array Destructring: ", t, " and ", u);

const myObject2 = {

    name: "Sohidul Islam",
    id: "CSE01806649",
    dept: {
        building: ["A", "B", "C", "D", "E", "F"],
        deptName: ["CSE", "BBA", "EEE"],
        studentNumber: [45, 60, 40]
    },
    courses: {
        majorCourse: ["A", "B", "C", "D"],
        nonmajorCourse: ["E", "F", "G"]
    }
}
//Object chaining
console.log(myObject2.courses.majorCourse);
console.log(myObject2?.courses?.majorCourse);
console.log(myObject2.course?.majorCourse);
