export default function() {
    const thecondSlideBox = document.createElement('div')
    thecondSlideBox.classList.add('slide')
    thecondSlideBox.classList.add('slide2')

    const div = document.createElement('div')
    div.classList.add('thecondDiv')
    thecondSlideBox.appendChild(div)

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Two Sides Of JEDI Power'
    div.appendChild(h1)

    const p = document.createElement('p')
    p.innerHTML = 'Dark or light? Choose yours'
    div.appendChild(p) 

    const button = document.createElement('button')
    button.innerHTML = 'Show more'
    div.appendChild(button) 

    return thecondSlideBox
}