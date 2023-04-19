export default function(){
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  //sounds Modes
  const forestMode = new Audio("./assets/modes/sounds/Floresta.wav")
  const rainMode = new Audio("./assets/modes/sounds/Chuva.wav")
  const coffeeMode = new Audio("./assets/modes/sounds/Cafeteria.wav")
  const fireplaceMode = new Audio("./assets/modes/sounds/Lareira.wav")

  forestMode.loop = true;
  rainMode.loop = true;
  coffeeMode.loop = true;
  fireplaceMode.loop = true;

  function buttonPress(){
    buttonPressAudio.play()
  }
  function timerEnd(){
    kitchenTimer.play()
  }

  return{
    buttonPress,
    timerEnd,
    forestMode,
    rainMode,
    coffeeMode,
    fireplaceMode
  }
}