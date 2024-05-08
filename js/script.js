let km = Number.parseInt(prompt('Inserisci il numero di chilometri che desideri percorrere'))

let age = Number.parseInt(prompt('Inserisci la tua età'))

const priceRaw = 0.276

const underDiscount = 21

const overDiscount = 42

let track = km * priceRaw

console.log(track)

if (age < 18) {

    let priceDiscounted = (track / 100) * underDiscount

    let priceFinal = track - priceDiscounted

    let priceFinalShow = priceFinal.toFixed(2)

    console.warn(priceFinalShow)
}

if (age >= 65) {

    let priceDiscounted = (track / 100) * overDiscount;

    let priceFinal = track - priceDiscounted;

    let priceFinalShow = priceFinal.toFixed(2);

    console.warn(priceFinalShow)
}

else if (age >= 18 && age < 65) {
    
    let priceFinalShow = track.toFixed(2)

    console.warn(priceFinalShow)
}