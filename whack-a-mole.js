// Define all elements 
const holes = document.querySelectorAll(".hole")
const mole = document.querySelectorAll(".mole")
const scoreBoard = document.querySelector(".score")
const timer = document.querySelector(".timer")
let currentScore = 0;
// Create a function that will randomize the mole on the gameboard


let randomMolePosition =()=>{
 let randomMole = holes[Math.floor(Math.random()*holes.length)]
    randomMole.classList.add("mole")
    setTimeout(()=>{
        randomMole.classList.remove("mole")
    },2000)
}
// randomMole()
// randomHole()
setInterval(randomMolePosition, 1000)
// Create a function that will allow the mole to be on said square for X amount of time using setInterval



// Create a function to keep track of the time
// function timerUpdate 

// Create a function for the scoreboard
// function scoreUpdate
// Create a function that will have an eventListner on the gameboard hole so when it is clicked it will add a point to the scoreboard if there was a mole on it. 
holes.forEach(moles => {
    moles.addEventListener("click", moleHit)
            
   
})

function moleHit() {
      
    console.log(event)
    if (event.target.classList[1] === "mole"){
      
        currentScore ++;
        console.log(currentScore);
        scoreBoard.innerHTML = `Score ${currentScore}`
    }
    
    console.log(scoreBoard.innerHTML)
    return currentScore

}

    


 //Create a function to stop the game when the timer ends