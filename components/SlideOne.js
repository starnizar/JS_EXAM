export default function() {
    const firstSlideBox = document.createElement('div')
    firstSlideBox.classList.add('slide')
    firstSlideBox.classList.add('slide1')

    const div = document.createElement('div')
    div.classList.add('firstDiv')
    firstSlideBox.appendChild(div)

    const h1 = document.createElement('h1')
    h1.innerHTML = 'LUCK! I Am Your Farther...'
    div .appendChild(h1)

    const p = document.createElement('p')
    p.innerHTML = 'All truth about Darth Vader'
    div.appendChild(p) 

    const button = document.createElement('button')
    button.innerHTML = 'Show more'
    div.appendChild(button) 

    return firstSlideBox
}