import Slide1 from './SlideOne.js'
import Slide2 from './SlideTwo.js'
import Slide3 from './SlideThree.js'
import Slide4 from './SlideFour.js'


export default function() {
    const Slides = [Slide1(), Slide2(), Slide3(), Slide4()]
    const app = document.querySelector('.app')
    
    const nextBtn = document.createElement('button')
    nextBtn.classList.add('next')
    nextBtn.innerHTML = '>'
    const prevBtn = document.createElement('button')
    prevBtn.classList.add('prev')
    prevBtn.innerHTML = '<'

    // Slides.map(item => {
    //     app.appendChild(item)
    // })

    let numOfSlide = 0

    nextBtn.addEventListener('click', () => {
        document.querySelector('.slide') ? document.querySelector('.slide').remove() : null
        numOfSlide++
        numOfSlide > Slides.length - 1 ? numOfSlide = 0 : null
        app.appendChild(Slides[numOfSlide])   
        console.log('hi next');
    })

    prevBtn.addEventListener('click', () => {
        document.querySelector('.slide') ? document.querySelector('.slide').remove() : null
        numOfSlide--
        numOfSlide < 0 ? numOfSlide = Slides.length - 1 : null
        app.appendChild(Slides[numOfSlide])
        console.log('hello prev');
    })

    app.appendChild(prevBtn)
    app.appendChild(nextBtn)
    app.appendChild(Slides[numOfSlide])   
}