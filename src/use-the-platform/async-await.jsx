import React from "react";
import FeatureBlock from "../cross-cutting/FeatureBlock";

export default function() {
  return (
    <FeatureBlock title="Async/await">
      <div>(see code)</div>
    </FeatureBlock>
  );
}

// // promises
// const feedKitten = dispatch => {
//   callKitten()
//     .then(kitten => {
//       dispatch(kittenArrived(kitten));

//       openFood()
//         .then(food => {
//           dispatch(foodOpened(food));
//           return fillBowl(food);
//         })
//         .then(bowl => {
//           dispatch(bowlFilled(bowl));
//           return giveBowlToKitten(bowl, kitten);
//         })
//         .then(() => {
//           petKitten(kitten);
//         })
//         .then(() => {
//           dispatch(happyKitten(kitten));
//         });
//   });
// };

// // async/await
// const feedKitten = kitten => {
//   return async dispatch => {
//     const kitten = await callKitten();
//     dispatch(kittenArrived(kitten));

//     const food = await openFood();
//     dispatch(foodOpened(food));

//     const bowl = await fillBowl(food);
//     dispatch(bowlFilled(bowl));

//     await petKitten(kitten);
//     dispatch(happyKitten(kitten));
//   };
// };
