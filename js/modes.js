export default function({
  btnForest,
  btnRain,
  btnCoffee,
  btnFireplace,
  btnForestClicked,
  btnRainClicked,
  btnCoffeeClicked,
  btnFireplaceClicked,
  sound
}){
//modesON
  function forestOn(){
    btnForest.classList.add('hide')
    btnForestClicked.classList.remove('hide')
    sound.forestMode.play()
  }
  function rainOn(){
    btnRain.classList.add('hide')
    btnRainClicked.classList.remove('hide')
    sound.rainMode.play()
  }
  function coffeeOn(){
    btnCoffee.classList.add('hide')
    btnCoffeeClicked.classList.remove('hide')
    sound.coffeeMode.play()
  }
  function fireplaceOn(){
    btnFireplace.classList.add('hide')
    btnFireplaceClicked.classList.remove('hide')
    sound.fireplaceMode.play()
  }
//modesOFF
function forestOff(){
  btnForest.classList.remove('hide')
  btnForestClicked.classList.add('hide')
  sound.forestMode.pause()
}
function rainOff(){
  btnRain.classList.remove('hide')
  btnRainClicked.classList.add('hide')
  sound.rainMode.pause()
}
function coffeeOff(){
  btnCoffee.classList.remove('hide')
  btnCoffeeClicked.classList.add('hide')
  sound.coffeeMode.pause()
}
function fireplaceOff(){
  btnFireplace.classList.remove('hide')
  btnFireplaceClicked.classList.add('hide')
  sound.fireplaceMode.pause()
}

  return{
    forestOn,
    rainOn,
    coffeeOn,
    fireplaceOn,
    forestOff,
    rainOff,
    coffeeOff,
    fireplaceOff
  }
}