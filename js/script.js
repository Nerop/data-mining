var colors = require('colors');
const oneArray = [0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, "1"];
const twoArray = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, "2"];
const cArray = [1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, "c"];
const NOISE_LEVEL = 0.5;

function setAmountOfCalls(number, func, array) {
    while (number > 0) {
        number--;
        console.log(func(array));
    }
}

function invertNumber(number) {
    var resultOfInvertion = number === 1 ? 0 : 1;
    return resultOfInvertion;
}

function drawToConsole(char1, char2, char3) {
    if (char1 == "0" && char2 == "0" && char3 == "0") {
        console.log(colors.bgGreen(' '), colors.bgGreen(' '), colors.bgGreen(' '));
    }
    else if (char1 == "0" && char2 == "0" && char3 == "1") {
        console.log(colors.bgGreen(' '), colors.bgGreen(' '), colors.bgRed(' '));
    }
    else if (char1 == "0" && char2 == "1" && char3 == "1") {
        console.log(colors.bgGreen(' '), colors.bgRed(' '), colors.bgRed(' '));
    }
    else if (char1 == "1" && char2 == "1" && char3 == "1") {
        console.log(colors.bgRed(' '), colors.bgRed(' '), colors.bgRed(' '));
    }
    else if (char1 == "1" && char2 == "0" && char3 == "0") {
        console.log(colors.bgRed(' '), colors.bgGreen(' '), colors.bgGreen(' '));
    }
    else if (char1 == "1" && char2 == "1" && char3 == "0") {
        console.log(colors.bgRed(' '), colors.bgRed(' '), colors.bgGreen(' '));
    }
    else if (char1 == "1" && char2 == "0" && char3 == "1") {
        console.log(colors.bgRed(' '), colors.bgGreen(' '), colors.bgRed(' '));
    }
    else if (char1 == "0" && char2 == "1" && char3 == "0") {
        console.log(colors.bgGreen(' '), colors.bgRed(' '), colors.bgGreen(' '));
    }
}

function generateNumbers(array) {
    for (i = 0; i < array.length - 1; i++) {
        var generatedNumber = Math.random().toFixed(2);
        if (generatedNumber < NOISE_LEVEL) {
            array[i] = invertNumber(array[i]);
        }
    }
    for (i = 0; i < array.length - 1; i++) {
        if (i % 3 === 0){
            drawToConsole(array[i], array[i+1], array[i+2]);
        }
    }
    return array;
}

function randomizeCalls(ones, twos, cs){
    var amountOfCalls = Number(ones + twos + cs);
    var onesFrequency = Number((ones/amountOfCalls).toFixed(2));
    var twosFrequency = Number((twos/amountOfCalls).toFixed(2));
    var onesPlusTwos = Number(onesFrequency + twosFrequency);
    var csFrequency = (cs/amountOfCalls).toFixed(2);
    while (amountOfCalls > 0){
        var rand = Math.random().toFixed(2);
        if (rand < onesFrequency) {
            setAmountOfCalls(1, generateNumbers, oneArray);
            amountOfCalls--;
        }
        else if (rand > onesFrequency && rand < onesPlusTwos) {
            setAmountOfCalls(1, generateNumbers, twoArray);
            amountOfCalls--;
        }
        else {
            setAmountOfCalls(1, generateNumbers, cArray);
            amountOfCalls--;
        }
    }
}

randomizeCalls(10,22,33);
