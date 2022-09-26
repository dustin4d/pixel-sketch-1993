const gridCell = document.querySelector('.grid-cell')
const gridContainer = document.querySelector('.grid-container')
const resolutionTag = document.querySelector('.resolution-tag')
const toolbar = document.querySelector('.toolbar')
const colorbar = document.querySelector('.colorbar')
const buttons = document.querySelector('button')
const colorBtn = document.querySelector('#colorBtn')
const eraseBtn = document.querySelector('#eraser')
const clearBtn = document.querySelector('#clear')
const palette = document.querySelectorAll('.palette')
const colors = document.querySelector('.palette')
const cells = document.querySelectorAll('.grid-cell')

// Current pen color
let currentColor = 'rgb(0, 0, 255)'

console.log(colors)

// Toggle between two bars
colorBtn.addEventListener('click', function() {
    // Hide the toolbar
    toolbar.classList.remove('show')
    toolbar.classList.add('hidden')

    // Show the colorbar
    colorbar.classList.add('show')
    colorbar.classList.remove('hidden')
})

// Event listener attached to each color option
for (const pickedColor of palette) {
    pickedColor.addEventListener('click', function(){
        console.log('Color picked!')
        //.classList.add('.color-orange')

        // Revert back to toolbar
        colorbar.classList.remove('show')
        colorbar.classList.add('hidden')

        toolbar.classList.remove('hidden')
        toolbar.classList.add('show')
    })
}

// eraseBtn just sets the pen color to null, i.e. just forcing the 
// cell color back to what it was.
eraseBtn.addEventListener('click', function(){
    currentColor = null;
})

// Clear button actually just reloads the page.
// Not fancy, but it works well.
clearBtn.addEventListener('click', function(){
    location.reload()
    console.log('Canvas cleared.')
})

// Add each grid cell with event listener as they're spawned
// adding eventListeners retroactively seems to not work.
function addSquare() {
    const canvas = document.createElement('div')
    gridContainer.appendChild(canvas)
    canvas.classList.add('grid-cell')
    canvas.addEventListener('click', function(){
        canvas.style.backgroundColor = currentColor
    })
}

// Use to set resolution for now, will be adjustable from
// the page itself later
let currentRes = 16;

// Add a grid cell based on your resolution, set with currentRes
for (let i = 0; i < currentRes ** 2; i++){
    addSquare();
}