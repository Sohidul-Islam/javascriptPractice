const userNumberInput = document.getElementById("user-number--input")
const userNumberBtn = document.getElementById("user-number--btn")
const userClearBtn = document.getElementById("user-clear--btn")

userNumberBtn.addEventListener("click", function () {
    const value = userNumberInput.value;
    const div = document.getElementById("users-section");
    if (value > 0 && value <= 5000)
        userLoad(userNumberInput.value)
    else {
        div.innerHTML = `<h3>Not Valid Number, please enter a valid number between 1-5000</h3>`
    }
})
userClearBtn.addEventListener("click", function () {
    const div = document.getElementById("users-section");
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }
})

const userLoad = (num) => {
    const div = document.getElementById("users-section");
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }
    fetch(`https://randomuser.me/api/?results=${num}`)
        .then(response => response.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = (data) => {
    console.log("Data: ", data);
    const usersSection = document.getElementById("users-section")

    for (const user of data) {
        console.log(user);
        const userDiv = document.createElement("div");
        userDiv.className = "userCard";
        userDiv.innerHTML = `<img class="user-img" src="${user.picture.large}" alt="">
        <div class="user-infobox">
            <div class="user-name">
                <h3><span>Name: </span> ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            </div>
            <div class="user-gender">
                <h3><span>Gender: </span> ${user.gender}</h3>
            </div>
            <div class="user-email">
                <h3><span>Email: </span> ${user.email}</h3>
            </div>
            <div class="user-phone">
                <h3><span>Phone: </span> ${user.cell}</h3>
            </div>
        </div>
        `
        usersSection.appendChild(userDiv)
    }

}