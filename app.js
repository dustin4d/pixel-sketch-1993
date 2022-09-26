const gridCell = document.querySelector('.grid-cell')
const gridContainer = document.querySelector('.grid-container')
const resolutionTag = document.querySelector('.resolution-tag')
const toolbar = document.querySelector('.toolbar')
const colorbar = document.querySelector('.colorbar')
const buttons = document.querySelector('button')
const colorBtn = document.querySelector('#colorBtn')
const returnBtn = document.querySelector('.return-button')
const palette = document.querySelectorAll('.palette')
const cells = document.querySelectorAll('.grid-cell')

// Current pen color
let currentColor = 'rgb(0, 0, 255)'


// Toggle between two bars
colorBtn.addEventListener('click', function() {
    // Hide the toolbar
    toolbar.classList.remove('show')
    toolbar.classList.add('hidden')

    // Show the colorbar
    colorbar.classList.add('show')
    colorbar.classList.remove('hidden')
})


// Basic event listener attached to color options
for (const pickedColor of palette) {
    pickedColor.addEventListener('click', function(){
        console.log('Color picked!')

        // Revert back to toolbar
        colorbar.classList.remove('show')
        colorbar.classList.add('hidden')

        toolbar.classList.remove('hidden')
        toolbar.classList.add('show')
    })
}

function addSquare() {
    const canvas = document.createElement('div')
    gridContainer.appendChild(canvas)
    canvas.classList.add('grid-cell')
    canvas.addEventListener('click', function(){
        canvas.style.backgroundColor = currentColor
    })
}

let currentRes = 16;

for (let i = 0; i < currentRes ** 2; i++){
    addSquare();
}