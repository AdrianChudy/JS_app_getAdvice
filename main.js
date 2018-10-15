const advice = ["walcz", "przemyś to jeszcze raz"];
const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnShow = document.querySelector(".showAdvice");
const btnOptions = document.querySelector(".showOptions");

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const valueLowerCase = input.value.toLowerCase();
    const newAdvice = valueLowerCase;

    if (input.value.length) {
        for (addedAdvice of advice) {
            if (addedAdvice === newAdvice) {
                alert("Podana rada została już dodana. Wprowadź inną !!!");
                input.value = "";
                return;
            }
        }
        advice.push(newAdvice);
        alert(`Dodano rade: ${newAdvice}`);
        input.value = "";
    }
}

const cleanAdvice = (e) => {
    e.preventDefault();
    advice.length = 0;
    alert("Lista rad została wyczyszona");
    const h1 = document.querySelector("h1");
    h1.textContent = "";
}

const showAdvice = (e) => {
    e.preventDefault();
    const h1 = document.querySelector("h1");
    const index = Math.floor((Math.random() * advice.length));
    h1.textContent = advice[index];
}

const showOptions = (e) => {
    e.preventDefault();
    if (advice.length > 0) {
        alert(advice.join(` , `));
    } else {
        alert("Brak dostępnych rad. Dodaj rade.")
    }

}

btnAdd.addEventListener("click", addAdvice);
btnClean.addEventListener("click", cleanAdvice);
btnShow.addEventListener("click", showAdvice);
btnOptions.addEventListener("click", showOptions);