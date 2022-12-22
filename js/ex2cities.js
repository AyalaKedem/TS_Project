"use strict";
const search_input = document.getElementById("search_input");
const user_input = document.getElementById("user_input");
const add_btn = document.getElementById("add_btn");
const list_cities_btn = document.getElementById("list_cities_btn");
const list_box = document.getElementById("list_box");
const auto_list = document.querySelector(".auto_list");
const box = document.getElementById("box");
const city_box = document.getElementById("city_box");
const for_X = document.getElementById("for_X");
const cities = [];
cities.sort();
let current = localStorage.getItem("Cities");
if (current === null) {
    localStorage.setItem("Cities", JSON.stringify(cities));
}
add_btn.addEventListener("click", () => {
    const value = user_input.value;
    if (value.length > 1) {
        cities.push(user_input.value);
    }
    cities.sort();
    localStorage.setItem("Cities", JSON.stringify(cities));
    user_input.value = "";
    user_input.focus();
});
list_cities_btn.addEventListener("click", () => {
    //clear all cities from list
    document.querySelectorAll(".pt-1").forEach((li) => li.remove());
    cities.sort();
    const str_from_localStorage = localStorage.getItem("Cities") ?? "";
    const arr_from_localStorage = JSON.parse(str_from_localStorage);
    const final_arr = [...new Set(arr_from_localStorage)];
    // Show full cities list
    final_arr.forEach((city) => {
        const city_item = document.createElement("li");
        city_item.classList.add("pt-1", "pb-1", "list-box");
        list_box.classList.add("border", "rounded-2", "pe-5");
        city_item.innerHTML += city;
        city_item.addEventListener("click", () => {
            city_item.classList.add("change-bg");
            focusCity(city);
        });
        city_item.addEventListener("dblclick", () => {
            city_item.classList.add("reg-bg");
        });
        list_box.appendChild(city_item);
    });
    document.querySelectorAll("#reset_id").forEach((b) => b.remove());
    const reset = document.createElement("button");
    reset.innerText = "X";
    reset.id = "reset_id";
    reset.classList.add("gray_btn", "mt-5");
    reset.addEventListener("click", () => {
        reset.remove();
        list_box.innerHTML = "";
    });
    for_X.appendChild(reset);
});
function openDocument() {
    const str = localStorage.getItem("Cities") ?? "";
    const arr = JSON.parse(str);
    arr.forEach((city) => cities.push(city));
}
// Search
search_input.addEventListener("input", () => {
    //clear all cities from search list
    document.querySelectorAll(".city_item").forEach((li) => li.remove());
    const search_input_value = search_input.value.toLowerCase();
    if (!search_input_value.length) {
        return;
    }
    // Filter cities array according the input search value
    const filtered_cities_arrary = cities.filter((city) => city.toLowerCase().startsWith(search_input_value));
    const final_search_arr = [...new Set(filtered_cities_arrary)];
    // Show search list according the input search value
    final_search_arr.forEach((city) => {
        const li = document.createElement("li");
        li.classList.add("city_item");
        li.innerText = city;
        auto_list.appendChild(li);
        li.addEventListener("click", () => {
            focusCity(city);
        });
    });
});
function focusCity(item) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("city_box", "mx-auto");
    newDiv.innerText = item;
    box.querySelectorAll("div").forEach((div) => div.remove());
    box.appendChild(newDiv);
    newDiv.addEventListener("click", () => newDiv.remove());
}
openDocument();
