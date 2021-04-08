const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fs = require('fs')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

const randomCar = () => {
const gates = ['goat', 'goat', 'goat']

const randomGates = randomInt(0, gates.length) // un nombre aléatoire entre 0 et 2
// console.log(randomGates)
// const convertCar = randomGates.toString().replace(randomGates, 'car')
// console.log(convertCar)
}

// randomCar()

exports.randomCar = randomCar



