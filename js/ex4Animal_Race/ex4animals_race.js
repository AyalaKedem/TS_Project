import { Utils } from "../utils.js";
import { animalArr } from "./object.js";
const start_btn = document.getElementById("start_btn");
const container_fluid = document.getElementById("container_fluid");
// const container = document.getElementById('container') as HTMLDivElement;
let id_set;
const animal_wrapper2 = document.createElement("div");
container_fluid.appendChild(animal_wrapper2);
const animal_map_imags = animalArr.map((animal) => {
    const img = document.createElement("img");
    img.classList.add("p-4", "my-position");
    img.src = `./img/${animal.id}.png`;
    return img;
});
animal_map_imags.forEach((img) => {
    animal_wrapper2.appendChild(img);
});
start_btn.addEventListener("click", () => {
    start_btn.remove();
    animal_wrapper2.remove();
    const animal_wrapper = document.createElement("div"); //
    animal_wrapper.id = "animal_wrapper";
    animal_wrapper.classList.add("animal-wrapper");
    const final_line = document.createElement("div");
    final_line.classList.add("final-line");
    container_fluid.appendChild(animal_wrapper);
    container_fluid.appendChild(final_line);
    const animal_map_imags = animalArr
        .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
        .map((animal, index) => {
        const img = document.createElement("img");
        img.classList.add(animal.id, "p-4", "my-border");
        img.src = `./img/${animal.id}.png`;
        if (index % 2 === 0) {
            img.style.marginLeft = "155px";
        }
        return img;
    });
    animal_map_imags.forEach((img) => {
        animal_wrapper.appendChild(img);
    });
    const animal_steps = animalArr.map((animal) => {
        if (animal.name !== "horse") {
            animal.step = animal.step * Utils.random(1, 5);
        }
        else {
            animal.step = animal.step * Utils.random(1, 2);
        }
        return animal.step;
    });
    const animal_voice = animalArr.map((animal) => {
        return animal.voice;
    });
    const chose_animal = document.querySelectorAll("#animal_wrapper img");
    chose_animal.forEach((animal_img, index) => {
        animal_img.classList.add("pointer");
        animal_img.addEventListener("click", () => {
            chose_animal.forEach((animal) => {
                animal.classList.remove("chosen-animal");
                animal.classList.remove("my-border");
            });
            animal_img.classList.add("chosen-animal");
            setTimeout(() => {
                const audio = new Audio(`./media/${animal_voice[index]}.wav`);
                audio.play();
            }, 1000);
            id_set = setInterval(() => {
                animal_map_imags.forEach((animal_img, index) => {
                    animal_img.style.transform += `translateX(${(animal_steps[index] * Utils.random(1, 5)) / Utils.random(1, 25)}px)`;
                    // console.log((animal_steps[index] * Utils.random(1, 5)) / Utils.random(1, 25));
                    if (animal_img.getBoundingClientRect().x > document.body.getBoundingClientRect().width) {
                        clearInterval(id_set);
                        const circle = document.createElement("div");
                        circle.classList.add("circle");
                        container_fluid.appendChild(circle);
                        const winner = document.createElement("h1");
                        winner.innerHTML = animal_img.classList[0];
                        winner.classList.add("winner");
                        circle.appendChild(winner);
                        console.log(animal_img.classList[0]);
                        const p = document.createElement("p");
                        p.innerText = "is the Winner!!!";
                        p.classList.add("winner-p");
                        circle.appendChild(p);
                    }
                });
            }, 500);
        });
    });
});
