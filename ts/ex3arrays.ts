import { Utils } from "./utils";
const userInput = document.getElementById("userInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const randomBtn = document.getElementById("randomBtn") as HTMLButtonElement;
const sortBtn = document.getElementById("sortBtn") as HTMLButtonElement;
const arrBox = document.getElementById("arrBox") as HTMLDivElement;
const newArrBtn = document.getElementById('newArrBtn') as HTMLButtonElement;

//  למה זה לא עובד לי?
// const inputValue = userInput.value;

let arr: Array<number> = [];
userInput.focus();

const newNumber = (number: number) => {
  arr.push(number);
  arrBox.innerHTML = "";
  arr.forEach(n=>{
    const div = document.createElement("div");
    div.classList.add('number');
    div.innerHTML = String(n);
    arrBox.appendChild(div);
  })
};

//Add
addBtn.addEventListener("click", () => {
  if (userInput.value.length === 0) {
    userInput.focus();
    return;
  }
  newNumber(+userInput.value);
  userInput.value = "";
  userInput.focus();
});

//Random Number
randomBtn.addEventListener("click", () => {
  // Utils.random(0, 100) //לא הולך לי (יבוא מיותילס)
  const randomNumb = Math.floor(Math.random() * (100 - 0));
  const random = randomNumb;
  newNumber(random);
});

//Sort
sortBtn.addEventListener("click", () => {
  // Utils.bubbleSort(arr); //לא הולך לי (יבוא מיותילס)
  Sort(arr);
  arrBox.innerHTML = "";
  arr.forEach((n) => {
    const number = document.createElement("div");
    number.classList.add("number");
    number.innerHTML = String(n);
    arrBox.appendChild(number);
  });
});

const Sort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

//new Arr
newArrBtn.addEventListener('click', ()=> {
  arrBox.innerHTML = '';
  arr = [];
  userInput.focus();
})