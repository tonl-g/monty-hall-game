const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fs = require('fs')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')
const {startGame, rulesGame} = require('./presentator')
const {randomGates} = require('./random')

const loopGame = () => {
const choices = ['Gate 0', 'Gate 1', 'Gate 2']
let index = readlineSync.keyInSelect(choices, 'Choisissez votre porte: ')
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
      console.log(`Gate ${index}: it's a ${convertGoat}`)
    }
    console.log(chalk.red(`Vous n'avez pas trouvé le voiture`))
    console.log(chalk.red(`Vous avez le choix de garder votre porte ${index} ou de la changer avec l'autre porte restante`))
  } else {
    console.log(chalk.green(`Félicitation! Vous avez trouvé le voiture`))
  }
}

// loopGame()

exports.loopGame = loopGame
