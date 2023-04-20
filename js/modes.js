export default function({
  cardsModes,
  buttonCards,
  buttonCardsClicked,
  cardsRange,

  sound,
}){
//modesON
  function forestOn(){
    buttonCards[0].classList.add('hide')
    buttonCardsClicked[0].classList.remove('hide')
    
    cardsRange[0].classList.add('range-clicked')
    cardsModes[0].classList.add('card-selected')

    sound.forestMode.play()
  }
  function rainOn(){
    buttonCards[1].classList.add('hide')
    buttonCardsClicked[1].classList.remove('hide')

    cardsRange[1].classList.add('range-clicked')
    cardsModes[1].classList.add('card-selected')

    sound.rainMode.play()
  }
  function coffeeOn(){
    buttonCards[2].classList.add('hide')
    buttonCardsClicked[2].classList.remove('hide')

    cardsRange[2].classList.add('range-clicked')
    cardsModes[2].classList.add('card-selected')

    sound.coffeeMode.play()
  }
  function fireplaceOn(){
    buttonCards[3].classList.add('hide')
    buttonCardsClicked[3].classList.remove('hide')

    cardsRange[3].classList.add('range-clicked')
    cardsModes[3].classList.add('card-selected')

    sound.fireplaceMode.play()
  }
//modesOFF
  function forestOff(){
    
    buttonCards[0].classList.remove('hide')
    buttonCardsClicked[0].classList.add('hide')
    
    cardsRange[0].classList.remove('range-clicked')
    cardsModes[0].classList.remove('card-selected')

    sound.forestMode.pause()
  }
  function rainOff(){
    buttonCards[1].classList.remove('hide')
    buttonCardsClicked[1].classList.add('hide')

    cardsRange[1].classList.remove('range-clicked')
    cardsModes[1].classList.remove('card-selected')

    sound.rainMode.pause()
  }
  function coffeeOff(){
    buttonCards[2].classList.remove('hide')
    buttonCardsClicked[2].classList.add('hide')

    cardsRange[2].classList.remove('range-clicked')
    cardsModes[2].classList.remove('card-selected')

    sound.coffeeMode.pause()
  }
  function fireplaceOff(){
    buttonCards[3].classList.remove('hide')
    buttonCardsClicked[3].classList.add('hide')

    cardsRange[3].classList.remove('range-clicked')
    cardsModes[3].classList.remove('card-selected')

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