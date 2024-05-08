const priceRaw = 0.276;

const underDiscount = 21;

const overDiscount = 42;

let km = Number.parseInt(prompt('Inserisci il numero di chilometri che desideri percorrere'));

if (isNaN(km)) {

    alert('Valore non valido')

};

let age = Number.parseInt(prompt('Inserisci la tua età'))

if (isNaN(age)) {

    alert('Valore non valido')

};

let track = km * priceRaw;

let trackShow = track.toFixed(2)

document.getElementById ('track').innerHTML = trackShow

if (age < 18) {

    let priceDiscounted = (track / 100) * underDiscount

    let priceFinal = track - priceDiscounted

    let priceFinalShow = priceFinal.toFixed(2)

    console.warn(priceFinalShow)

    document.getElementById('priceFinalShow').innerHTML = priceFinalShow
}

if (age >= 65) {

    let priceDiscounted = (track / 100) * overDiscount;

    let priceFinal = track - priceDiscounted;

    let priceFinalShow = priceFinal.toFixed(2);

    console.warn(priceFinalShow)

    document.getElementById('priceFinalShow').innerHTML = priceFinalShow
}

else if (age >= 18 && age < 65) {

    let priceFinalShow = track.toFixed(2)

    console.warn(priceFinalShow)

    document.getElementById('priceFinalShow').innerHTML = priceFinalShow
};