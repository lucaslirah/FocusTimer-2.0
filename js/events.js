import {  
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
  btnFireplaceClicked
} from './elements.js'

export default function({
  sound, timer, modes,
}){
  //Events
  //modesON
btnForest.addEventListener('click', function(){
  modes.forestOn()
})
btnRain.addEventListener('click', function(){
  modes.rainOn()
})
btnCoffee.addEventListener('click', function(){
  modes.coffeeOn()
})
btnFireplace.addEventListener('click', function(){
  modes.fireplaceOn()
})
//modesOFF
btnForestClicked.addEventListener('click', function(){
  modes.forestOff()
})
btnRainClicked.addEventListener('click', function(){
  modes.rainOff()
})
btnCoffeeClicked.addEventListener('click', function(){
  modes.coffeeOff()
})
btnFireplaceClicked.addEventListener('click', function(){
  modes.fireplaceOff()
})

//controls
btnPlay.addEventListener('click', function(){
  timer.validateMinutes()
  sound.buttonPress()
})
btnStop.addEventListener('click', function(){
  timer.resetTimer()
  sound.buttonPress()
})
btnTimerUp.addEventListener('click', function(){
  sound.buttonPress()
  timer.hold()
  timer.minutesUp()
})
btnTimerDown.addEventListener('click', function(){
  sound.buttonPress()
  timer.hold()
  timer.minutesDown()
})
}