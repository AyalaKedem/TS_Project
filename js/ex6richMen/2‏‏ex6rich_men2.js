import { json_ar } from "./jsonArr.js";
const card = document.getElementById("card");
const card_arr = json_ar.map((rich_man) => {
    const col_div = document.createElement("div");
    col_div.classList.add("col", "m-1");
    const div = document.createElement("div");
    div.classList.add("card", "h-100");
    div.style.width = "18rem";
    const img = document.createElement("img");
    img.src = `${rich_man.image}`;
    img.classList.add("card-img-top");
    img.alt = `Face image of ${rich_man.name}`;
    const cardBody_div = document.createElement("div");
    cardBody_div.classList.add("card-body");
    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerText = rich_man.name;
    const money_p = document.createElement("p");
    money_p.classList.add("fst-italic");
    money_p.innerText = rich_man.worth;
    const source_p = document.createElement("p");
    source_p.classList.add("card-text");
    source_p.innerText = `${rich_man.name}'s money came from ${rich_man.source}`;
    const btn = document.createElement("button");
    btn.id = rich_man.name;
    btn.classList.add("btn", "btn-primary");
    btn.innerText = "Delete";
    btn.addEventListener("click", () => {
        // filter();
        console.log(card_arr);
    });
    card.appendChild(col_div);
    col_div.appendChild(div);
    div.appendChild(img);
    div.appendChild(cardBody_div);
    cardBody_div.appendChild(h5);
    cardBody_div.appendChild(money_p);
    cardBody_div.appendChild(source_p);
    cardBody_div.appendChild(btn);
    // function filter() {
    //   card_arr.filter(card_man =>
    //     btn.id === card_man.name)
    // }
});
