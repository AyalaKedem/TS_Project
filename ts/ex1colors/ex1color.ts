// אם ישאר לי זמן localStorage - הקוד מוכן גם כדי לשמור צבעים אהובים ב
// ( יש מערך מוכן שצבע נדחף אליו בזמן לחיצה על אייקון לב ונמחק בלחיצה על האיקס)

import { Utils } from "../utils.js";

export class Color {
  red: number;
  green: number;
  blue: number;
  timeStamp: string;
  rgb: string;
  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.timeStamp = Utils.dateString();
    this.rgb = this.rgbString();
  }

  rgbString() {
    const rgb = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    return rgb;
  }

  hexString() {
    const redHex = this.red.toString(16).padStart(2, "0");
    const greenHex = this.green.toString(16).padStart(2, "0");
    const blueHex = this.blue.toString(16).padStart(2, "0");

    return `#${redHex}${greenHex}${blueHex}`;
  }
}

const redInput = document.getElementById("red_input") as HTMLInputElement;
const greenInput = document.getElementById("green_input") as HTMLInputElement;
const blueInput = document.getElementById("blue_input") as HTMLInputElement;
const colorBox = document.getElementById("color-box") as HTMLDivElement;
const drawBtn = document.getElementById("drawBtn") as HTMLButtonElement;
const faveColorBox = document.getElementById("fave-color") as HTMLDivElement;
let faveColorArr: Array<Color> = [];

redInput.focus();

function limitNumber(colorValue: number) {
  let limit = Math.max(colorValue, 0);
  limit = Math.min(limit, 225);

  return limit;
}

function limitValue(redValue: number, greenValue: number, blueValue: number) {
  const red = limitNumber(redValue);
  const green = limitNumber(greenValue);
  const blue = limitNumber(blueValue);

  return [red, green, blue];
}

function color() {
  const [r, g, b] = limitValue(+redInput.value, +greenInput.value, +blueInput.value);

  const userColor = new Color(r, g, b);
  // console.log(userColor);

  const viewColor = document.createElement("div");

  viewColor.style.backgroundColor = userColor.rgbString();
  viewColor.classList.add("box-size");

  const heart = document.createElement("div");
  heart.innerHTML = "&#9825";
  heart.classList.add("heart-symbol");
  heart.addEventListener("click", () => {
    // console.log(faveColorArr);

    faveColorArr.push(userColor);

    const faveColor = document.createElement("div");
    faveColor.classList.add("box-size");
    faveColor.style.background = userColor.rgbString();

    const close = document.createElement("div");
    close.innerHTML = "&#x00d7;";
    close.classList.add("heart-symbol");
    close.addEventListener("click", () => {
      faveColor.remove();
      faveColorArr = faveColorArr.filter((c) => c.rgbString() != faveColor.style.background);
      // console.log(faveColorArr);
    });

    const rgbText = document.createElement("div");
    rgbText.innerText = userColor.rgbString();
    rgbText.classList.add("rgb-color");

    faveColor.appendChild(close);
    faveColor.appendChild(rgbText);
    faveColorBox.appendChild(faveColor);
  });

  const hexColor = document.createElement("div");
  hexColor.innerText = "for Hex >>";
  hexColor.classList.add("hex-color");
  hexColor.addEventListener("click", () => {
    if (hexColor.innerText === "for Hex >>") {
      hexColor.innerText = userColor.hexString();
      hexColor.classList.remove("hex-color");
      hexColor.classList.add("hex-color-2");
    } else {
      hexColor.innerText = "for Hex >>";
      hexColor.classList.remove("hex-color-2");
      hexColor.classList.add("hex-color");
    }
  });

  viewColor.appendChild(heart);
  viewColor.appendChild(hexColor);
  colorBox.appendChild(viewColor);
}

drawBtn.addEventListener("click", () => {
  color();
  redInput.value = '';
  greenInput.value = '';
  blueInput.value = '';
  redInput.focus();
})
