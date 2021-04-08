const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fs = require('fs')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')
const {startGame, rulesGame, continueGame, choice} = require('./presentator')
const {randomCar} = require('./random')

const loopGame = () => {
  // let isRunning = true

  if (choice === randomCar) {
    console.log(`Vous avez trouvé le voiture`)
  } else {
    console.log(`Vous avez pas trouvé le voiture`)
  }
}

exports.loopGame = loopGame
