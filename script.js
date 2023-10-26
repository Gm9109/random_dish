"use strict";

const groBtn = document.querySelector("button");
const info = document.querySelector(".meal");
const ingredients = document.querySelector(".grosBordel")

groBtn.addEventListener("click", () => {
  // alert(1)
  groBtn.classList.remove("relief");
});

const req = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
};
// req()
//   .then((res) => {
//     return Object.entries(res.meals[0]).filter(
//       (e) => e[0].includes("strIngredient") || e[0].includes("strMeasure")
//     );
//   })
//   .then((data) =>
//     data.forEach((e) => {
//       console.log(e[1]);
//     })
//   );

const hein = () => {
    let arr1 = []
    let arr2 = []
    let finalArr = []
    req()
  .then((res) => {
    arr1 = Object.entries(res.meals[0]).filter((e) => e[0].includes("strIngredient"));
    arr2 = Object.entries(res.meals[0]).filter((e) => e[0].includes("strMeasure"));
    for(let i = 0; i < arr1.length; i++){
        finalArr.push([arr1[i][1], arr2[i][1]])
    }
    // console.log(finalArr.filter(e=> e[0]));
    finalArr = finalArr.filter(e=> e[0])
    //   finalArr.forEach(e => console.log())
      for(let i = 0; i < finalArr.length; i++){
        ingredients.insertAdjacentHTML("afterbegin", `${finalArr[i][0]} : ${finalArr[i][1]}<br>`)
      }
  })
//   return finalArr
//   console.log(finalArr);
//   html=`${finalArr[0]} : ${finalArr[1]}`
}
// hein()

// const insertBordel = () => {
//   return hein()
// // console.log(hein());
// }
// console.log(insertBordel());


// fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((res) =>
//   console.log(res)
// );
const jsp = (data) => {
    let measures = ""
    let arr1 = []
    let arr2 = []
    let finalArr = []
    arr1 = Object.entries(data.meals[0]).filter((e) => e[0].includes("strIngredient"));
    arr2 = Object.entries(data.meals[0]).filter((e) => e[0].includes("strMeasure"));
    for(let i = 0; i < arr1.length; i++){
        finalArr.push([arr1[i][1], arr2[i][1]])
    }
    // console.log(finalArr.filter(e=> e[0]));
    finalArr = finalArr.filter(e=> e[0])
    //   finalArr.forEach(e => console.log())
      for(let i = 0; i < finalArr.length; i++){
        // ingredients.insertAdjacentHTML("afterbegin", `${finalArr[i][0]} : ${finalArr[i][1]}<br>`)
        measures += `${finalArr[i][0]} : ${finalArr[i][1]}<br>`
    }

  const html = `<div>
  <h2>${data.meals[0].strMeal}</h2>
  <div class="main">
  <div class="picAndMeasures">
  <img src="${data.meals[0].strMealThumb}" alt="tg">
  <div class="recipe">
  <div class="wot">${data.meals[0].strInstructions}</div>
  </div>
  </div>
  <div class="grosBordel">${measures}</div>
  <div>${data.meals[0].strArea}</div>
    <a href="${data.meals[0].strYoutube}">click here to get an ad</a>
    </div>
    </div>`;
    
  info.insertAdjacentHTML("afterbegin", html);
};

req().then((res) => jsp(res));

// const a = () => {
//   req().then((res) => {
//     for (let i = 0; i < 20; i++) {
//       if (res.meals[0].strIngredient`${i}`) {
//         console.log(1);
//       }
//     }
//   });
// };

// a()

groBtn.addEventListener("click", ()=>{
    info.innerHTML=""
    req().then((res) => {
        jsp(res);
   
    
    });
})