export default function({
  displayMinutes,
  displaySeconds,
  sound,
}){
  let timerMinutes = Number(displayMinutes.textContent)
  let timerTimeOut
  let lockPlay = 0

  function countdown(){
    timerTimeOut = setTimeout(function(){
    let seconds = displaySeconds.textContent
    let minutes = displayMinutes.textContent
    let isFinished = minutes <= 0 && seconds <= 0

    if(seconds <= 0){
      seconds = 60
      --minutes
    }
    if(isFinished){
      resetTimer()
      sound.timerEnd()
      return
    }

    updateDisplay(minutes, String(seconds - 1))
    
    countdown()
    },1000)
  }
  function updateDisplay(minutes, seconds){
    displayMinutes.textContent = String(minutes).padStart(2,"0")
    displaySeconds.textContent = String(seconds).padStart(2,"0")
  }

  function resetTimer(){
    hold()
    updateDisplay(timerMinutes, 0)
    lockPlay = 0
  }
  function hold(){
    clearTimeout(timerTimeOut)
  }

  function minutesUp(){
    timerMinutes = timerMinutes + 5
    if(timerMinutes <= 0){
      timerMinutes = 0
      return
    }
    updateDisplay(timerMinutes, 0)
    lockPlay = 0
  }
  function minutesDown(){
    timerMinutes = timerMinutes - 5
    if(timerMinutes <= 0){
      timerMinutes = 0
      updateDisplay(timerMinutes, 0)
      return
    }
    updateDisplay(timerMinutes, 0)
    lockPlay = 0
  }
  function validateMinutes(){
    
    if(lockPlay <= 0 && timerMinutes > 0){
      countdown()
      lockPlay++
    }
  }

  return{
    resetTimer,
    hold,
    
    minutesUp,
    minutesDown,
    validateMinutes,
  }
}