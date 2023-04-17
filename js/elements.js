//Statements
//controls
const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnTimerUp = document.querySelector('.timer-up')
const btnTimerDown = document.querySelector('.timer-down')
//modes
const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnCoffee = document.querySelector('.coffee')
const btnFireplace = document.querySelector('.fireplace')
//buttons-clicked
const btnForestClicked = document.querySelector('.forest-clicked')
const btnRainClicked = document.querySelector('.rain-clicked')
const btnCoffeeClicked = document.querySelector('.coffee-clicked')
const btnFireplaceClicked = document.querySelector('.fireplace-clicked')

//timer
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

//Exports
export{
  btnPlay,
  btnStop,
  btnTimerUp,
  btnTimerDown,
  btnForest,
  btnRain,
  btnCoffee,
  btnFireplace,
  btnForestClicked,
  btnRainClicked,
  btnCoffeeClicked,
  btnFireplaceClicked,
  displayMinutes,
  displaySeconds
}