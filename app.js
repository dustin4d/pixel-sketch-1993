// Constants
const gridCell = document.querySelector('.grid-cell')
const gridContainer = document.querySelector('.grid-container')
const resolutionTag = document.querySelector('.resolution-tag')
const toolbar = document.querySelector('.toolbar')
const colorbar = document.querySelector('.colorbar')
const buttons = document.querySelector('button')
const colorBtn = document.querySelector('#colorBtn')
const returnBtn = document.querySelector('.return-button')
const palette = document.querySelectorAll('.palette')

// Current pen color
let currentColor

// Event Listeners
colorBtn.addEventListener('click', function() {
    // Hide the toolbar
    toolbar.classList.remove('show')
    toolbar.classList.add('hidden')

    // Show the colorbar
    colorbar.classList.add('show')
    colorbar.classList.remove('hidden')
})

// Get the value of the element's background-color
// then assign it to currentColor
for(let i = 0; i < palette.length; i++) {
    i.addEventListener('click', function() {
        console.log(i.style.backgroundColor)
    })
}

for(let i = 0; i < palette.length; i++) {
    console.log(`${i + 1} total colors.`)
}

// Logic
function addSquare() {
    const canvas = document.createElement('div')
    gridContainer.appendChild(canvas)
    canvas.classList.add('grid-cell')
}

let currentRes = 16;

for (let i = 0; i < currentRes ** 2; i++){
    addSquare();
}

function swapBars() {
    buttons.remove();

    const colorButton = document.createElement('button')
    toolbar.appendChild(colorButton)
}

