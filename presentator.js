const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fs = require('fs')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

// Start game
const startGame = () => {
  if (readlineSync.keyInYNStrict(chalk.blue(`Do you want play Monty Hall Game? `))) {
  // 'y' key was pressed.
  console.log('Start')
  // continuer le programme
  } else {
  // 'n' key was pressed.
  console.log('Bye')
  process.exit(0)
  } 
}

// Rules Game
const rulesGame = () => {
  console.log(chalk.blue(`Je suis le présentateur et le but du jeu est de trouver la voiture parmis ces 3 portes!`))
}

// Continue game
const continueGame = () => {
  if (readlineSync.keyInYNStrict(chalk.blue(`Do you want to continue? `))) {
  // 'y' key was pressed.
  console.log('Continue')
  // continuer le programme
  } else {
  // 'n' key was pressed.
  console.log('Bye')
  process.exit(0)
  } 
}

const choice = () => {
let choices = ['Gate 1', 'Gate 2', 'Gate 3']
let index = readlineSync.keyInSelect(choices, 'Please select your choice: ')
switch (index) {
  case 0:
    break
  case 1:
    break
  case 2:
    break
  }
}

exports.startGame = startGame
exports.rulesGame = rulesGame
exports.continueGame = continueGame
exports.choice = choice