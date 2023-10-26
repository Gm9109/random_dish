"use strict";

const groBtn = document.querySelector("button");
const grid = document.querySelector(".grid");


const request = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const data = await res.json();
  return data;
};

// const hein = () => {
//   let arr1 = [];
//   let arr2 = [];
//   let finalArr = [];
//   req().then((res) => {
//     arr1 = Object.entries(res.meals[0]).filter((e) =>
//       e[0].includes("strIngredient")
//     );
//     arr2 = Object.entries(res.meals[0]).filter((e) =>
//       e[0].includes("strMeasure")
//     );
//     for (let i = 0; i < arr1.length; i++) {
//       finalArr.push([arr1[i][1], arr2[i][1]]);
//     }
//     // console.log(finalArr.filter(e=> e[0]));
//     finalArr = finalArr.filter((e) => e[0]);
//     //   finalArr.forEach(e => console.log())
//     for (let i = 0; i < finalArr.length; i++) {
//       ingredients.insertAdjacentHTML(
//         "afterbegin",
//         `${finalArr[i][0]} : ${finalArr[i][1]}<br>`
//       );
//     }
//   });

// };

const randDish = (data) => {
  let measures = "";
  let finalArr = [];

  let arr1 = Object.entries(data.meals[0]).filter((e) =>
    e[0].includes("strIngredient")
  );

  let arr2 = Object.entries(data.meals[0]).filter((e) =>
    e[0].includes("strMeasure")
  );

  for (let i = 0; i < arr1.length; i++) {
    finalArr.push([arr1[i][1], arr2[i][1]]);
  }
  finalArr = finalArr.filter((e) => e[0]);
  for (let i = 0; i < finalArr.length; i++) {
    measures += `${finalArr[i][0]} : ${finalArr[i][1]}<br>`;
  }

  const html = `
  <h1 class="card" id="title">In need for a dish idea ?</h1>
  <h2 class="card" id="name">How about a <em>${data.meals[0].strMeal}</em> ?</h2>
  <div class="card" id="nation"> ${data.meals[0].strArea} meal incoming !<br></div>
  <a class="card" target="blank" href="${data.meals[0].strYoutube}">click here to see an available videoguide</a>
  <img class="card" src="${data.meals[0].strMealThumb}" alt="">
  <div class="card" id="instructions">${data.meals[0].strInstructions}<br><B>&darr;Ingredients Below&darr;</B></div>
  <div class="card">You are going to need these<br>&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;<br>${measures}</div>
  `;
  grid.insertAdjacentHTML("beforeend", html);
};

request().then((data) => randDish(data));

groBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  request().then((data) => {
    randDish(data);
  });
});
