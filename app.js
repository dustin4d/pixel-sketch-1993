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

// Use to set resolution for now, will be adjustable from
// the page itself later
let currentRes = 16

// Add a grid cell based on your resolution, set with currentRes
for (let i = 0; i < currentRes ** 2; i++){
    addSquare();
}

/* Probably not the cleanest solution, but using input type color lets you
 * pick any color, but I want a limited palette. So I select every 
 * color individually, and use it's value property (which is empty by default)
 * then just reference that in the eventListener when you select the color.
 */

const redBtn = document.querySelector('.color-red')
const orangeBtn = document.querySelector('.color-orange')
const yellowBtn = document.querySelector('.color-yellow')
const greenBtn = document.querySelector('.color-green')
const dkgreenBtn = document.querySelector('.color-dkgreen')
const blueBtn = document.querySelector('.color-blue')
const greyBtn = document.querySelector('.color-grey')
const blackBtn = document.querySelector('.color-black')
redBtn.value = '#b30000'
orangeBtn.value = '#ff8000'
yellowBtn.value = '#ffffaa'
greenBtn.value = '#6cd900'
dkgreenBtn.value = '#008000'
blueBtn.value = '#404080'
greyBtn.value = '#888888'
blackBtn.value = '#000000'

// Current pen color
let currentColor

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

        // Set your pen's color to whatever you just clicked
        currentColor = pickedColor.value
    })
}

/* eraseBtn just sets the pen color to null, i.e. just forcing the 
 * cell color back to what it was.
 */
eraseBtn.addEventListener('click', function(){
    currentColor = null;
})

/* Clear button actually just reloads the page.
   Not fancy, but it works well.
 */
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

