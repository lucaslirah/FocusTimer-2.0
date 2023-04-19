export default function({
  bodyColor,
  activateDarkTheme,
  deactivateDarkTheme,

  controlsBtnImg,
  cardsModes,
  buttonCards,
  cardsRange,
}){
  
function darkThemeOn(){
  activateDarkTheme.classList.add('hide')
  deactivateDarkTheme.classList.remove('hide')

  //body
  bodyColor.style.backgroundColor = 'hsla(240, 5%, 7%, 1)';
  bodyColor.style.color = '#ffffff';

  //controls buttons
  controlsBtnImg[0].style.filter = 'brightness(3.5)'
  controlsBtnImg[1].style.filter = 'brightness(3.5)'
  controlsBtnImg[2].style.filter = 'brightness(3.5)'
  controlsBtnImg[3].style.filter = 'brightness(3.5)'

  //cards
  cardsSetOn()
}
function darkThemeOff(){
  activateDarkTheme.classList.remove('hide')
  deactivateDarkTheme.classList.add('hide')

  //body
  bodyColor.style.backgroundColor = '#ffffff';
  bodyColor.style.color = '#000';

  //controls buttons
  controlsBtnImg[0].style.filter = 'brightness(0)'
  controlsBtnImg[1].style.filter = 'brightness(0)'
  controlsBtnImg[2].style.filter = 'brightness(0)'
  controlsBtnImg[3].style.filter = 'brightness(0)'
  
  //cards
  cardsSetOff()
}

function cardsSetOn(){
    //cards
    cardsModes[0].classList.add('dark-mode-on')
    cardsModes[0].classList.remove('dark-mode-off')
    cardsModes[1].classList.add('dark-mode-on')
    cardsModes[1].classList.remove('dark-mode-off')
    cardsModes[2].classList.add('dark-mode-on')
    cardsModes[2].classList.remove('dark-mode-off')
    cardsModes[3].classList.add('dark-mode-on')
    cardsModes[3].classList.remove('dark-mode-off')
  
    //butttons
    buttonCards[0].classList.add('button-dark-mode')
    buttonCards[1].classList.add('button-dark-mode')
    buttonCards[2].classList.add('button-dark-mode')
    buttonCards[3].classList.add('button-dark-mode')
  
    //ranges
    cardsRange[0].classList.remove('dark-mode-off')
    cardsRange[0].classList.add('dark-mode-on')
    cardsRange[1].classList.remove('dark-mode-off')
    cardsRange[1].classList.add('dark-mode-on')
    cardsRange[2].classList.remove('dark-mode-off')
    cardsRange[2].classList.add('dark-mode-on')
    cardsRange[3].classList.remove('dark-mode-off')
    cardsRange[3].classList.add('dark-mode-on')
}
function cardsSetOff(){
    //cards
    cardsModes[0].classList.add('dark-mode-off')
    cardsModes[0].classList.remove('dark-mode-on')
    cardsModes[1].classList.add('dark-mode-off')
    cardsModes[1].classList.remove('dark-mode-on')
    cardsModes[2].classList.add('dark-mode-off')
    cardsModes[2].classList.remove('dark-mode-on')
    cardsModes[3].classList.add('dark-mode-off')
    cardsModes[3].classList.remove('dark-mode-on')
  
    //cards buttons
    buttonCards[0].classList.remove('button-dark-mode')
    buttonCards[1].classList.remove('button-dark-mode')
    buttonCards[2].classList.remove('button-dark-mode')
    buttonCards[3].classList.remove('button-dark-mode')
  
    //ranges
    cardsRange[0].classList.add('dark-mode-off')
    cardsRange[0].classList.remove('dark-mode-on')
    cardsRange[1].classList.add('dark-mode-off')
    cardsRange[1].classList.remove('dark-mode-on')
    cardsRange[2].classList.add('dark-mode-off')
    cardsRange[2].classList.remove('dark-mode-on')
    cardsRange[3].classList.add('dark-mode-off')
    cardsRange[3].classList.remove('dark-mode-on')
}

return {
  darkThemeOn,
  darkThemeOff,
}
}