export default function() {
    const fourthSlideBox = document.createElement('div')
    fourthSlideBox.classList.add('slide')
    fourthSlideBox.classList.add('slide4')

    const div = document.createElement('div')
    div.classList.add('fourthDiv')
    fourthSlideBox.appendChild(div)

    const h1 = document.createElement('h1')
    h1.innerHTML = "How To Learn Droid's Language"
    div.appendChild(h1)

    const p = document.createElement('p')
    p.innerHTML = 'Usefull robots right in your house'
    div.appendChild(p) 

    const button = document.createElement('button')
    button.innerHTML = 'Show more'
    div.appendChild(button) 

    return fourthSlideBox
}