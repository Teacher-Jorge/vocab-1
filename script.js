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

//Contents 01 Apple
let btnApple = document.getElementById('btnApple')
let btnBanana = document.getElementById('btnBanana')
let btnPineapple = document.getElementById('btnPineapple')
let next1 = document.getElementById('next1')


btnApple.addEventListener('click', function() {
    let audioApple = document.getElementById('audioApple')
    audioApple.play()
    document.getElementById('btnApple').setAttribute("style", "box-shadow: 0 0 0")
    btnApple.style.backgroundColor = 'lime'
    next1.style.visibility = 'visible'
    btnBanana.disabled = 'true'
    btnPineapple.disabled = 'true'
})

btnBanana.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btnBanana').setAttribute("style", "box-shadow: 0 0 0")
    btnBanana.style.backgroundColor = 'red'
    btnBanana.disabled = 'true'
    
})
btnPineapple.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btnPineapple').setAttribute("style", "box-shadow: 0 0 0")
    btnPineapple.style.backgroundColor = 'red'
    btnPineapple.disabled = 'true'
})
//Contents 02 Pineapple
let btn2Avocado = document.getElementById('btn2Avocado')
let btn2Banana = document.getElementById('btn2Banana')
let btn2Pineapple = document.getElementById('btn2Pineapple')
let next2 = document.getElementById('next2')


btn2Pineapple.addEventListener('click', function() {
    let audioPineapple = document.getElementById('audioPineapple')
    audioPineapple.play()
    document.getElementById('btnApple').setAttribute("style", "box-shadow: 0 0 0")
    btn2Pineapple.style.backgroundColor = 'lime'
    next2.style.visibility = 'visible'
    btn2Avocado.disabled = 'true'
    btn2Banana.disabled = 'true'
})

btn2Banana.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn2Banana').setAttribute("style", "box-shadow: 0 0 0")
    btn2Banana.style.backgroundColor = 'red'
    btn2Banana.disabled = 'true'
    
})

btn2Avocado.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn2Avocado').setAttribute("style", "box-shadow: 0 0 0")
    btn2Avocado.style.backgroundColor = 'red'
    btn2Avocado.disabled = 'true'
})
//Contents 03 Banana
let btn3Avocado = document.getElementById('btn3Avocado')
let btn3Banana = document.getElementById('btn3Banana')
let btn3Pear = document.getElementById('btn3Pear')
let next3 = document.getElementById('next3')


btn3Banana.addEventListener('click', function() {
    let audioBanana = document.getElementById('audioBanana')
    audioBanana.play()
    document.getElementById('btn3Banana').setAttribute("style", "box-shadow: 0 0 0")
    btn3Banana.style.backgroundColor = 'lime'
    next3.style.visibility = 'visible'
    btn3Avocado.disabled = 'true'
    btn3Pear.disabled = 'true'
})

btn3Avocado.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn2Banana').setAttribute("style", "box-shadow: 0 0 0")
    btn3Avocado.style.backgroundColor = 'red'
    btn3Avocado.disabled = 'true'
    
})

btn3Pear.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn2Avocado').setAttribute("style", "box-shadow: 0 0 0")
    btn3Pear.style.backgroundColor = 'red'
    btn3Pear.disabled = 'true'
})
//Contents 04 Avocado
let btn4Avocado = document.getElementById('btn4Avocado')
let btn4Pear = document.getElementById('btn4Pear')
let btn4Grape = document.getElementById('btn4Grape')
let next4 = document.getElementById('next4')


btn4Avocado.addEventListener('click', function() {
    let audioAvocado = document.getElementById('audioAvocado')
    audioAvocado.play()
    document.getElementById('btn4Avocado').setAttribute("style", "box-shadow: 0 0 0")
    btn4Avocado.style.backgroundColor = 'lime'
    next4.style.visibility = 'visible'
    btn4Pear.disabled = 'true'
    btn4Grape.disabled = 'true'
})

btn4Grape.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn4Grape').setAttribute("style", "box-shadow: 0 0 0")
    btn4Grape.style.backgroundColor = 'red'
    btn4Grape.disabled = 'true'
    
})

btn4Pear.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn4Pear').setAttribute("style", "box-shadow: 0 0 0")
    btn4Pear.style.backgroundColor = 'red'
    btn4Pear.disabled = 'true'
})
//Contents 05 Pear
let btn5Strawberry = document.getElementById('btn5Strawberry')
let btn5Pear = document.getElementById('btn5Pear')
let btn5Grape = document.getElementById('btn5Grape')
let next5 = document.getElementById('next5')


btn5Pear.addEventListener('click', function() {
    let audioPear = document.getElementById('audioPear')
    audioPear.play()
    document.getElementById('btn5Pear').setAttribute("style", "box-shadow: 0 0 0")
    btn5Pear.style.backgroundColor = 'lime'
    next5.style.visibility = 'visible'
    btn5Strawberry.disabled = 'true'
    btn5Grape.disabled = 'true'
})

btn5Grape.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn5Grape').setAttribute("style", "box-shadow: 0 0 0")
    btn5Grape.style.backgroundColor = 'red'
    btn5Grape.disabled = 'true'
    
})

btn5Strawberry.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn5Strawberry').setAttribute("style", "box-shadow: 0 0 0")
    btn5Strawberry.style.backgroundColor = 'red'
    btn5Strawberry.disabled = 'true'
})
