export default function() {
    const thirdSlideBox = document.createElement('div')
    thirdSlideBox.classList.add('slide')
    thirdSlideBox.classList.add('slide3')

    const div = document.createElement('div')
    div.classList.add('thirdDiv')
    thirdSlideBox.appendChild(div)

    const h1 = document.createElement('h1')
    h1.innerHTML = 'This Is The Way'
    div.appendChild(h1)

    const p = document.createElement('p')
    p.innerHTML = 'Mandalorians, who they are?'
    div.appendChild(p) 

    const button = document.createElement('button')
    button.innerHTML = 'Show more'
    div.appendChild(button) 

    return thirdSlideBox
}