//* Output Val
const outputGrundkcal = document.querySelector(".grund-kcal");
const outputGrundkj = document.querySelector(".grund-kj");
const outputGesamtkcal = document.querySelector(".gesamt-kcal");
const outputGesamtkj = document.querySelector(".gesamt-kj");

berechnen = () => {
  //* Werte Val
  const größeVal = document.querySelector("#körpergröße").value;
  const alterVal = document.querySelector("#alter").value;
  const gewichtVal = document.querySelector("#gewicht").value;
  const aktivitätVal = document.querySelector("select").value;
  const körperbauVal = document.querySelector(
    "input[name='körperbau']:checked"
  ).value;
  const data1 = Number(körperbauVal.slice(0, 5));
  console.log(data1);
  const data2 = Number(körperbauVal.slice(6, 10));
  console.log(data2);
  const data3 = Number(körperbauVal.slice(11, 14));
  console.log(data3);
  const data4 = Number(körperbauVal.slice(15, 18));
  console.log(data4);

  const grundUmsatzkcal = Math.round(
    data1 + data2 * gewichtVal + data3 * größeVal - data4 * alterVal
  );
  const gesamtUmsatzkcal = Math.round(grundUmsatzkcal * aktivitätVal);
  const grundUmsatzkj = Math.round(grundUmsatzkcal * 4.187);
  const gesamtUmsatzkj = Math.round(gesamtUmsatzkcal * 4.187);

  outputGrundkcal.innerHTML = grundUmsatzkcal;
  outputGesamtkcal.innerHTML = gesamtUmsatzkcal;
  outputGrundkj.innerHTML = grundUmsatzkj;
  outputGesamtkj.innerHTML = gesamtUmsatzkj;
};

reseten = () => {
  outputGrundkcal.innerHTML = "";
  outputGesamtkcal.innerHTML = "";
  outputGrundkj.innerHTML = "";
  outputGesamtkj.innerHTML = "";
};

berechneMe = () => {
  document.querySelector("body").classList.add("animation-shake");
  setTimeout(() => {
    document.querySelector("body").classList.remove("animation-shake");
  }, 1000);
};

resetMe = () => {
  document.querySelector("body").classList.add("animation-hide");
  setTimeout(() => {
    document.querySelector("body").classList.remove("animation-hide");
  }, 1000);
};
