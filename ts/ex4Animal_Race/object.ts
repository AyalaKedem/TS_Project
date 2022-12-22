const players = {
  dog: {
    name: "dog",
    id: "dog",
    voice: "woof",
    img: "dog.gif",
    step: 50,
  },
  horse: {
    name: "horse",
    id: "horse",
    voice: "neigh",
    img: "horse.gif",
    step: 70,
  },
  duck: {
    name: "duck",
    id: "duck",
    voice: "quack",
    img: "duck.gif",
    step: 40,
  },
  chick: {
    name: "chick",
    id: "chick",
    voice: "cheap",
    img: "chick.gif",
    step: 30,
  },
};

export interface AnimalType {
  name: string;
  id: string;
  voice: string;
  img: string;
  step: number;
}

export class Animal implements AnimalType {
  name: string;
  id: string;
  voice: string;
  img: string;
  step: number;
  isChosen: boolean;
  translateX: number;
  constructor(name: string, id: string, voice: string, img: string, step: number, isChosen: boolean, translateX: number) {
    this.name = name;
    this.id = id;
    this.voice = voice;
    this.img = img;
    this.step = step;
    this.isChosen = isChosen;
    this.translateX = translateX;
  }
}

export const animalArr: Array<Animal> = [];

for (let k in players) {
  // console.log(k);

  let key = k as "dog" | "duck" | "horse" | "chick";

  let animal = players[key];
  // console.log(animal);

  animalArr.push(new Animal(animal.name, animal.id, animal.voice, animal.img, animal.step, false, 0));
}

// console.log(animalArr);