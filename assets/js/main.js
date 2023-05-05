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
  const körperbauVal = document.querySelector(
    "input[name='körperbau']:checked"
  ).value;
  const aktivitätVal = document.querySelector("select").value;

  //* weiblich
  if (körperbauVal == "weiblich") {
    const grundUmsatzkcal = Math.round(
      655.1 + 9.6 * gewichtVal + 1.8 * größeVal - 4.7 * alterVal
    );
    const gesamtUmsatzkcal = Math.round(grundUmsatzkcal * aktivitätVal);
    const grundUmsatzkj = Math.round(grundUmsatzkcal * 4.187);
    const gesamtUmsatzkj = Math.round(gesamtUmsatzkcal * 4.187);

    outputGrundkcal.innerHTML = grundUmsatzkcal;
    outputGesamtkcal.innerHTML = gesamtUmsatzkcal;
    outputGrundkj.innerHTML = grundUmsatzkj;
    outputGesamtkj.innerHTML = gesamtUmsatzkj;

    //* männlich
  } else {
    const grundUmsatzkcal = Math.round(
      66.47 + 13.7 * gewichtVal + 5 * größeVal - 6.8 * alterVal
    );
    const gesamtUmsatzkcal = Math.round(grundUmsatzkcal * aktivitätVal);
    const grundUmsatzkj = Math.round(grundUmsatzkcal * 4.187);
    const gesamtUmsatzkj = Math.round(gesamtUmsatzkcal * 4.187);

    outputGrundkcal.innerHTML = grundUmsatzkcal;
    outputGesamtkcal.innerHTML = gesamtUmsatzkcal;
    outputGrundkj.innerHTML = grundUmsatzkj;
    outputGesamtkj.innerHTML = gesamtUmsatzkj;
  }
};

reseten = () => {
  outputGrundkcal.innerHTML = "";
  outputGesamtkcal.innerHTML = "";
  outputGrundkj.innerHTML = "";
  outputGesamtkj.innerHTML = "";
};
