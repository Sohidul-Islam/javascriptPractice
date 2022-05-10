
const getDataTitle = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))
}
const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}

const std = {
    name: "shufol",
    id: 123,
    dept: "CSE"
}

console.log("Json object ", std);

const StringiFy = JSON.stringify(std);
console.log("Json to stringify object: ", StringiFy);
const JsonObject = JSON.parse(StringiFy);
console.log("Stringify to Json object: ", JsonObject);