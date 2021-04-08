const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fs = require('fs')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')
const {startGame, rulesGame, continueGame} = require('./presentator')
const {randomGates} = require('./random')

const loopGame = () => {
const choices = ['Gate 1', 'Gate 2', 'Gate 3']
let index = readlineSync.keyInSelect(choices, 'Please select your gate: ')
switch (index) {
  case 0:
    break
  case 1:
    break
  case 2:
    break
  }

  if (index != randomGates) {
    console.log(`Vous n'avez pas trouvé le voiture`)
  } else {
    console.log(`Vous avez trouvé le voiture`)
  }
}


// loopGame()

exports.loopGame = loopGame
