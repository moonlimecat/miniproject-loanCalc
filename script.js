let p;
let r;
let t;

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const inputs = document.querySelectorAll("input");

function clear() {}

submitBtn.addEventListener("click", function () {
  p = document.getElementById("inputLoan").value;
  p = Number(p);
  r = document.getElementById("inputInterest").value;
  r = Number(r);
  t = document.getElementById("inputTermYear").value;
  t = Number(t);
  tm = document.getElementById("inputTermMonth").value;
  tm = Number(tm) / 12;

  z = (p * (r / 100 / 12)) / (1 - (1 + r / 100 / 12) ** (-12 * (t + tm)));

  document.getElementById("payment").innerHTML =
    `Payment: $` + Number(`${z}`).toFixed(2);
});

resetBtn.addEventListener("click", function () {
  inputs.forEach((input) => (input.value = " "));
});
