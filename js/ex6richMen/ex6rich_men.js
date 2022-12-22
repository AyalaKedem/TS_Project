import { json_ar } from "./jsonArr.js";
let arr = json_ar;
const card = document.getElementById("card");
arr.map((rich_man) => {
    const cardDiv = `<div class="card m-1 my-height my-bg" style="width: 15rem;">
      <img src="${rich_man.image}" class="card-img-top" alt="Face image of ${rich_man.name}">
      <div class="card-body">
        <h5 class="card-title">${rich_man.name}</h5>
        <p class="card-text fst-italic">${rich_man.worth}</p>
        <p class="card-text">${rich_man.name}'s money came from ${rich_man.source}</p>
      </div>
    </div>`;
    const cardWrapper = document.createElement("div");
    cardWrapper.innerHTML += cardDiv;
    cardWrapper.classList.add('d-flex', 'justify-content-center');
    console.log();
    card.appendChild(cardWrapper);
    cardWrapper.addEventListener("click", () => {
        cardWrapper.innerHTML = "";
        arr = arr.filter((c) => c.worth !== rich_man.worth);
        console.log(arr);
    });
});
