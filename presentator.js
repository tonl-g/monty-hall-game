const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fs = require('fs')
const { readFileSync } = require('fs')
const { randomInt } = require('crypto')

// Start game
const startGame = () => {
  if (readlineSync.keyInYNStrict(chalk.blue(`Bienvenue au jeu du Monty Hall Game? `))) {
  // 'y' key was pressed.
  console.log('Prêt?')
  // continuer le programme
  } else {
  // 'n' key was pressed.
  console.log('Au revoir')
  process.exit(0)
  } 
}

// Rules Game
const rulesGame = () => {
  console.log(chalk.blue(`Je suis le présentateur et le but du jeu est de trouver la voiture parmis ces 3 portes!`))
}

exports.startGame = startGame
exports.rulesGame = rulesGame