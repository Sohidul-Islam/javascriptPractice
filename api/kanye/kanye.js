
const getQuotes = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = (data) => {
    const quotes = document.getElementById("quotes");

    // quotes.innerHTML = `<h3>${data.quote}</h3>`

    const innerQuotes = document.createElement("li");

    innerQuotes.innerHTML = `<h5>${data.quote}</h5>`;
    quotes.appendChild(innerQuotes);
}