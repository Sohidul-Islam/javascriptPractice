const searchBox = document.getElementById("searchbox")
const searchBtn = document.getElementById("searchbtn")
const placeorder = document.getElementById("clear-btn")


searchBtn.addEventListener("click", () => {
    // console.log(searchBox.value)
    if (searchBox.value !== "")
        setlocalStorage(searchBox.value)
    displayItem(getlocalStorage())
})
placeorder.addEventListener("click", () => {
    // console.log(searchBox.value)
    localStorage.removeItem("cart");
    displayItem(getlocalStorage())
})


const displayItem = (data) => {
    // console.log(typeof data);
    const ul = document.getElementById("item-list-container")
    let total = 0;
    ul.innerHTML = ""
    for (const obj in data) {
        // console.log("object: ", obj);
        const li = document.createElement("li")
        li.className = `list-group-item`
        li.innerHTML = `${'Item: ' + '<strong>' + obj + '</strong>' + ' Qty: ' + '<strong>' + data[obj]}</strong>`
        total += data[obj];
        ul.appendChild(li)
    }
    const li = document.createElement("li")
    li.className = `list-group-item`
    li.innerHTML = `${'Total ' + '<strong>Qty </strong>' + '<strong>' + total}</strong>`
    ul.appendChild(li)

}

const getlocalStorage = () => {
    const getData = localStorage.getItem('cart')
    let obj;
    if (getData) {
        obj = JSON.parse(getData)
    } else {
        obj = {}
    }
    // console.log("get data: ", obj);
    return obj;

}
const setlocalStorage = (data) => {
    let cart = getlocalStorage()
    if (checkCart(data)) {
        cart[data] = 1 + cart[data];
    } else {
        cart[data] = 1;
    }

    console.log(cart);
    const setData = JSON.stringify(cart)
    const set = localStorage.setItem('cart', setData)
    return set;
}
const checkCart = (data) => {
    let cart = getlocalStorage()
    if (cart[data]) {
        return true
    } else {
        return false
    }
}
// console.log(getlocalStorage())
displayItem(getlocalStorage());