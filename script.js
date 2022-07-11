const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
/*
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}
*/
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

//Contents Apple
let btnApple = document.getElementById('btnApple')
let btnBanana = document.getElementById('btnBanana')
let btnPineapple = document.getElementById('btnPineapple')
let next1 = document.getElementById('next1')


btnApple.addEventListener('click', function() {
    let audioApple = document.getElementById('audio1')
    audioApple.play()
    document.getElementById('btnApple').setAttribute("style", "box-shadow: 0 0 0")
    btnApple.style.backgroundColor = 'lime'
    next1.style.visibility = 'visible'
    btnBanana.disabled = 'true'
    btnPineapple.disabled = 'true'
})

btnBanana.addEventListener('click', function() {
    let audioPop = document.getElementById('audio2')
    audioPop.play()
    document.getElementById('btnBanana').setAttribute("style", "box-shadow: 0 0 0")
    btnBanana.style.backgroundColor = 'red'
    btnBanana.disabled = 'true'
    
})
btnPineapple.addEventListener('click', function() {
    let audioPop = document.getElementById('audio2')
    audioPop.play()
    document.getElementById('btnPineapple').setAttribute("style", "box-shadow: 0 0 0")
    btnPineapple.style.backgroundColor = 'red'
    btnPineapple.disabled = 'true'
})