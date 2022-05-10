
const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

const displayPosts = (data) => {
    const posts = document.getElementById("posts")
    for (const post of data) {
        console.log("get elemetn");
        let div = document.createElement("div")
        div.className = "post";
        div.innerHTML = `<h1 class="post-title">${post.title}</h1><div class="post-body"><p class="post-body--text">${post.body}</p></div>`
        posts.appendChild(div)
    }
}