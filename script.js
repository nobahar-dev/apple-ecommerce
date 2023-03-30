//Common js
document.querySelectorAll('.watch-control, .controls a, .iphone-btns a').forEach(controls => {
    controls.addEventListener('click', event => {
        event.preventDefault()
    })
})
//End of Common js

//Slideshow
const slideShowElements = () => {
    for (let i = 1; i <= 5; i++) {
        const element = document.createElement('div')
        element.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && element.classList.add('change')

        document.querySelector('.slideshow').appendChild(element)
    }
}

slideShowElements()

const allDivs = document.querySelectorAll('.slideshow div')
let bgCounter = 1

const slideShow = () => {
    setInterval(() => {
        bgCounter++

        const div = document.querySelector('.slideshow .change')
        div.classList.remove('change')

        if (bgCounter < allDivs.length) {
            div.nextElementSibling.classList.add('change')

        } else {
            allDivs[0].classList.add('change')
            bgCounter = 1
        }
    }, 20000)
}

slideShow()
//End of Slideshow

//Cube
let x = 0
let y = 0
let z = 0
let bool = true
let interval

const cube = document.querySelector('.cube')

document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateY(${y -= 20}deg)`
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
})
const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)

    } else  {
        clearInterval(interval)
    }
}

playPause()

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause()
})

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true
    playPause()
})
//End of Cube

//Section 3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >=
        section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
})
//End of Section 3

//Section 4
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchBottomControl = document.querySelector('.watch-down-control')
const watchLeftControl = document.querySelector('.watch-left-control')
const watchRightControl = document.querySelector('.watch-right-control')

let axisY = 0
let axisX = 0

function hideControl() {
    if (axisY === -280)
        watchTopControl.classList.add('hideControl')
    else
        watchTopControl.classList.remove('hideControl')

    if (axisY === 280)
        watchBottomControl.classList.add('hideControl')
    else
        watchBottomControl.classList.remove('hideControl')

    if (axisX === 280)
        watchRightControl.classList.add('hideControl')
    else
        watchRightControl.classList.remove('hideControl')

    if (axisX === -280)
        watchLeftControl.classList.add('hideControl')
    else
        watchLeftControl.classList.remove('hideControl')
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControl()
})

watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`
    hideControl()
})

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`
    hideControl()
})

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`
    hideControl()
})
//End of Section 4


















