//Imports
import {
  displayMinutes,
  displaySeconds,

  bodyColor,
  activateDarkTheme,
  deactivateDarkTheme,

  controlsBtnImg,

  cardsModes,
  buttonCards,
  buttonCardsClicked,
  cardsRange,
} from './elements.js'
import Sounds from './sounds.js'
import Timer from './timer.js'
import Modes from './modes.js'
import Events from './events.js'
import DarkMode from './darkMode.js'

const sound = Sounds()
const timer = Timer({
  displayMinutes,
  displaySeconds,
  sound,
})
const modes = Modes({
  cardsModes,
  buttonCards,
  buttonCardsClicked,
  cardsRange,

  sound,
})
const darkMode = DarkMode({
  bodyColor,
  activateDarkTheme,
  deactivateDarkTheme,

  controlsBtnImg,

  cardsModes,
  buttonCards,
  cardsRange,
})

Events({sound, timer, modes, darkMode})

