const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fs = require('fs')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')
const {startGame, rulesGame, continueGame} = require('./presentator')
const {randomGates, showGate} = require('./random')

const loopGame = () => {
const choices = ['Gate 0', 'Gate 1', 'Gate 2']
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
    if (randomGates != !randomGates) {
      const convertGoat = randomGates.toString().replace(randomGates, 'goat')
      // console.log(convertGoat)
      console.log(`Gate ${index}: it's a goat`)
    }
    console.log(chalk.red(`Vous n'avez pas trouvé le voiture`))
  } else {
    console.log(chalk.green(`Félicitation! Vous avez trouvé le voiture`))
  }
}

// loopGame()

exports.loopGame = loopGame
