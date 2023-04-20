//Statements
const $ = document.querySelector.bind(document)
//body
const bodyColor =$('body')

//dark-mode-icons
const activateDarkTheme = $('#activate-dark-theme')
const deactivateDarkTheme = $('#deactivate-dark-theme')

//timer
const displayMinutes = $('.minutes')
const displaySeconds = $('.seconds')

//arrays
//controls
let controlsButtons = document.querySelectorAll('.controls-buttons');
let controlsBtn = Array.prototype.filter.call(controlsButtons, function(controlButton) {
    return controlButton.nodeName === 'BUTTON';
});
let controlsImg = document.querySelectorAll('.controls-buttons');
let controlsBtnImg = Array.prototype.filter.call(controlsImg, function(controlImg) {
    return controlImg.nodeName === 'IMG';
});
//cards
let elementsCards = document.querySelectorAll('.card-modes');
let cardsModes = Array.prototype.filter.call(elementsCards, function(elementCard) {
    return elementCard.nodeName === 'DIV';
});
//cards buttons
let elementsCardsButtons = document.querySelectorAll('footer button:nth-child(2n-1)');
let buttonCards = Array.prototype.filter.call(elementsCardsButtons, function(elementCardButton) {
    return elementCardButton.nodeName === 'BUTTON';
});
//buttonsclicked
let elementsCardsButtonsClicked = document.querySelectorAll('.button-clicked');
let buttonCardsClicked = Array.prototype.filter.call(elementsCardsButtonsClicked, function(elementCardButtonClicked) {
    return elementCardButtonClicked.nodeName === 'BUTTON';
});
//range cards
let elementsCardsRange = document.querySelectorAll('.range-style');
let cardsRange = Array.prototype.filter.call(elementsCardsRange, function(elementCardRange) {
    return elementCardRange.nodeName === 'INPUT';
});

export{
  bodyColor,

  controlsBtn,
  controlsBtnImg,

  displayMinutes,
  displaySeconds,

  activateDarkTheme,
  deactivateDarkTheme,

  cardsModes,
  buttonCards,
  buttonCardsClicked,
  cardsRange,
}