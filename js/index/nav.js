import { navArr } from './navArr.js';
const box = document.getElementById('box');
navArr.map((game) => {
    const btn = `<a class='game-link' href="${game.link}">${game.name}</a>`;
    box.innerHTML += btn;
});
