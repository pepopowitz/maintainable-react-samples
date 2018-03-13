import React from "react";
export default function() {
  return <div>array methods</div>;
}

const kittens = [
  {
    name: 'Turtle',
    color: 'gray',
    lovesMe: false,
  },
  {
    name: 'Flower',
    color: 'black',
    lovesMe: true,
    dead: true,
  },
  {
    name: 'Potatoes',
    color: 'gray',
    lovesMe: true,
    dead: true,
  }
]

// ----------------
// old
// ----------------
// let myKittens = [];
// for (let i = 0; i < kittens.length; i++) {
//   const kitten = kittens[i];
//   if (kitten.color === 'gray') {
//     myKittens.push(kitten.name);
//   }
// }

// let myFavoriteKitten;
// for (let i = 0; i < myKittens.length; i++) {
//   const kitten = myKittens[i];
//   if (kitten === 'Potatoes') {
//     myFavoriteKitten = kitten;
//   }
// }
// ----------------

// ----------------
// new
// ----------------
const myFavoriteKitten = kittens
  .filter(kitten => kitten.color === 'gray')
  .map(kitten => kitten.name)
  .find(kitten => kitten === 'Potatoes');
// ----------------

console.log(myFavoriteKitten);
