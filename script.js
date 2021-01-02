let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calculate(){
    let adults = inputAdults.value;
    let children = inputChildren.value;
    let duration = inputDuration.value;

    let totalMeat = meatFP(duration) * adults + (meatFP(duration) / 2 * children);
    let totalBeer = beerFP(duration) * adults;
    let totalDrinks = drinksFP(duration) * adults + (drinksFP(duration) / 2 * children);

    result.innerHTML = `<p>${totalMeat / 1000} kg de Carne<p>`
    result.innerHTML += `<p>${Math.ceil(totalBeer / 355)} Latas de Cerveja<p>`
    result.innerHTML += `<p>${Math.ceil(totalDrinks / 2000)} Pet's 2L de Bebidas<p>`
}

function meatFP(duration){
    if (duration >= 6){
        return 650;
    } else {
        return 400;
    }
}

function beerFP(duration){
    if (duration >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function drinksFP(duration){
    if (duration >= 6){
        return 1500;
    } else {
        return 1000;
    }
}