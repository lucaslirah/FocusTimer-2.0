//Imports
import {
  btnForest,
  btnRain,
  btnCoffee,
  btnFireplace,
  btnForestClicked,
  btnRainClicked,
  btnCoffeeClicked,
  btnFireplaceClicked,
  displayMinutes,
  displaySeconds,
} from './elements.js'
import Sounds from './sounds.js'
import Timer from './timer.js'
import Modes from './modes.js'
import Events from './events.js'

const sound = Sounds()
const timer = Timer({
  displayMinutes,
  displaySeconds,
  sound
})
const modes = Modes({
  btnForest,
  btnRain,
  btnCoffee,
  btnFireplace,
  btnForestClicked,
  btnRainClicked,
  btnCoffeeClicked,
  btnFireplaceClicked,
  sound
})

Events({sound, timer, modes})