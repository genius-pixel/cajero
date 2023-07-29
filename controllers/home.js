const infoDiv = document.getElementById("user-info");
const btnLogout = document.getElementById("btn-logout");
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

if (!loggedUser) {
  alert("debes iniciar sesion");
  window.location.href = "./index.html";
}

infoDiv.innerHTML = `
<div>
<span>BIENVENIDO ${loggedUser.email} </span>
<span>TU SALDO ES DE ${loggedUser.balance} </span>
<div>`;

btnLogout.addEventListener("click", function () {
  localStorage.removeItem("loggedUser");
  window.location.href = "./index.html";
});



// INICIO //------------

const num1Input = document.getElementById("num-input");
const num2Input = document.getElementById("txt-input");
const buttonSumar = document.getElementById("btn-suma");
const buttonResta = document.getElementById("btn-resta");

const resultDiv = document.getElementById("div-result");

// console.log("prueba: ", resultDiv); //------------
/* SALDO */
let saldo = 100;
/* INVESTIGAR */
//localStorage.setItem("saldo", saldo);
/* ---------- */

/* 1 */
let inputValue1 = "";
num1Input.addEventListener("change", function () {
  inputValue1 = parseInt(num1Input.value);
});
/*  */

/* 2  */
// let inputValue2 = "";
// num2Input.addEventListener("change", function () {
//   inputValue2 = parseInt(num2Input.value);
// });
/*  */

/* 3 */
buttonSumar.addEventListener("click", function () {
  let nuevoSaldo = saldo + inputValue1;
  saldo = nuevoSaldo;
  resultDiv.innerHTML += `<div>${nuevoSaldo}</div>`;
});
/*  */

/* 4 */
buttonResta.addEventListener("click", function () {
  let nuevoSaldo = saldo - inputValue1;
  saldo = nuevoSaldo;
  resultDiv.innerHTML += `<div>${nuevoSaldo}</div>`;
});
/*  */


