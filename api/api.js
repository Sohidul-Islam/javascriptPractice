
const getDataTitle = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUsers(json))
}
const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}

const displayUsers = (users) => {
    const ul = document.getElementById('users')
    for (const user of users) {
        console.log(user.name);
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li)
    }
}