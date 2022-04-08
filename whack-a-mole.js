// Define all elements 
const holes = document.querySelectorAll(".hole")
const mole = document.querySelector(".mole")
const gameBoard = document.querySelector(".board")
const scoreBoard = document.querySelector(".score")
const timer = document.querySelector(".timer")

// Create a function that will randomize the mole on the gameboard


function randomHole(){
    holes.forEach(hole => {
                                        // for each hole in our holes array
        hole.classList.remove("mole")
                                         // I want to get the hole and remove the mole if it exist in any of the holes 
    })
   
    let randomMolePosition = holes[Math.floor(Math.random()*holes.length)]
    console.log(randomMolePosition)
}

// randomHole()

// Create a function that will allow the mole to be on said square for X amount of time using setInterval
function surpriseMole(){
    
} 
// setInterval(function name, time in miliseconds we want the function to run)
setInterval(randomMolePosition, 3000)

// Create a function to keep track of the time
// function timerUpdate 

// Create a function for the scoreboard
// function scoreUpdate
// Create a function that will have an eventListner on the gameboard hole so when it is clicked it will add a point to the scoreboard if there was a mole on it. 

//Create a function to stop the game when the timer ends