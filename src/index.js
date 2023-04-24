document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#new-ramen").addEventListener("submit", addNewRamen);
    document.querySelector("#edit-ramen").addEventListener("submit", editRamen);
});

function showFirstRamen() {
    fetch("http://localhost:3000/ramens/1")
    .then(resp => resp.json()
    .then(ramen => {
document.querySelector(".detail-image").src = `${ramen.image}`;
document.querySelector(".name").textContent = `${ramen.name}`;
document.querySelector(".restaurant").textContent = `${ramen.restaurant}`;
document.querySelector("#rating-display").textContent = `${ramen.rating}`;
document.querySelector("#comment-display").textContent = `${ramen.comment}`;
}))}

showFirstRamen();

function editRamen(e) {
    e.preventDefault();
    document.querySelector("#rating-display").textContent = e.target[0].value;
    document.querySelector("#comment-display").textContent = e.target[1].value;
}

function addNewRamen(e) {
    e.preventDefault();
    console.log(e);
    const newRamen = {
        name: e.target[0].value,
        restaurant: e.target[1].value,
        image: e.target[2].value,
        rating: e.target[3].value,
        comment: e.target[4].value
    }

    showMenuRamen(newRamen);
}

function showMenuRamen(ramen) {
    const menuRamen = document.createElement("span");
    menuRamen.className = "menu-image-container";
    menuRamen.innerHTML = `<img src="${ramen.image}" class="menu-image" id="${ramen.name}">`;

    document.querySelector("#ramen-menu").appendChild(menuRamen);

    menuRamen.querySelector("img").addEventListener("click", () => {
        document.querySelector(".detail-image").src = `${ramen.image}`;
        document.querySelector(".name").textContent = `${ramen.name}`;
        document.querySelector(".restaurant").textContent = `${ramen.restaurant}`;
        document.querySelector("#rating-display").textContent = `${ramen.rating}`;
        document.querySelector("#comment-display").textContent = `${ramen.comment}`;
        });


}

document.querySelector("button").addEventListener("click", () => {
    if (document.querySelector(`.menu-image`).src === document.querySelector(".detail-image").src) {
       document.querySelector(`.menu-image`).remove();
    }
    document.querySelector(".detail-image").src = `./assets/image-placeholder.jpg`;
    document.querySelector(".name").textContent = `Insert Name Here`;
    document.querySelector(".restaurant").textContent = `Insert Restaurant Here`;
    document.querySelector("#rating-display").textContent = `0`;
    document.querySelector("#comment-display").textContent = ``;

}) 

function getRamenMenu() {
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramens => ramens.forEach(ramen => showMenuRamen(ramen)));
}

getRamenMenu();
