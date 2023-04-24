document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#new-ramen").addEventListener("submit", addNewRamen);
});

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
menuRamen.innerHTML = `<img src="${ramen.image}" class="menu-image">`;

document.querySelector("#ramen-menu").appendChild(menuRamen);

menuRamen.querySelector("img").addEventListener("click", () => {
    document.querySelector(".detail-image").src = `${ramen.image}`;
    document.querySelector(".name").textContent = `${ramen.name}`;
    document.querySelector(".restaurant").textContent = `${ramen.restaurant}`;
    document.querySelector("#rating-display").textContent = `${ramen.rating}`;
    document.querySelector("#comment-display").textContent = `${ramen.comment}`;
});
}


function getRamenMenu() {
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramens => ramens.forEach(ramen => showMenuRamen(ramen)));
}

getRamenMenu();
