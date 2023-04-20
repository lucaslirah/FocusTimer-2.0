import {  
  controlsBtn,

  activateDarkTheme,
  deactivateDarkTheme,

  buttonCards,
  buttonCardsClicked,
  cardsRange,
} from './elements.js'

export default function({
  sound, timer, modes, darkMode
}){

//Events
//modesON
buttonCards[0].addEventListener('click', function(){
  modes.forestOn()
})
buttonCards[1].addEventListener('click', function(){
  modes.rainOn()
})
buttonCards[2].addEventListener('click', function(){
  modes.coffeeOn()
})
buttonCards[3].addEventListener('click', function(){
  modes.fireplaceOn()
})
//modesOFF
buttonCardsClicked[0].addEventListener('click', function(){
  modes.forestOff()
})
buttonCardsClicked[1].addEventListener('click', function(){
  modes.rainOff()
})
buttonCardsClicked[2].addEventListener('click', function(){
  modes.coffeeOff()
})
buttonCardsClicked[3].addEventListener('click', function(){
  modes.fireplaceOff()
})

//controls
controlsBtn[0].addEventListener('click', function(){
  timer.validateMinutes()
  sound.buttonPress()
})
controlsBtn[1].addEventListener('click', function(){
  timer.resetTimer()
  sound.buttonPress()
})
controlsBtn[2].addEventListener('click', function(){
  sound.buttonPress()
  timer.hold()
  timer.minutesUp()
})
controlsBtn[3].addEventListener('click', function(){
  sound.buttonPress()
  timer.hold()
  timer.minutesDown()
})

//cards
//ranges for sounds
cardsRange[0].oninput = function(){
  sound.forestMode.volume = this.value
}
cardsRange[1].oninput = function(){
  sound.rainMode.volume = this.value
}
cardsRange[2].oninput = function(){
  sound.coffeeMode.volume = this.value
}
cardsRange[3].oninput = function(){
  sound.fireplaceMode.volume = this.value
}

//Dark-Theme
activateDarkTheme.addEventListener('click', function(){
  darkMode.darkThemeOn()
})
deactivateDarkTheme.addEventListener('click', function(){
  darkMode.darkThemeOff()
})


}