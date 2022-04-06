# Whack-A-Mole

## Project Description
### Interactive game that requires moles to be whacked when they appear on the screen for points. Moles will appear on the screen and if the player whacks the mole before it dissapears a point will be added to the scoreboard. There is a time limit and once that time limit is reached the game is over. 

## Planning Process
Jotting down ideas of what I need my game to do and what functions are required to make those things happen. 
I need a 4x4 grid that will place an image on a square within that grid at random. 
1. I will need event listeners on every square:
2. Function to make an image appear on a random square on the grid.
3. TimeOut functions that allow the image to only appear on the square for 2 seconds. 
4. Function to add a point to the scoreboard everytime the user whacks(clicks) the mole and maybe create a reaction when the player is    successful.
5. Funtion with timer to end the game after 1 min is over. 
6. A button with a function that will reset the game. 

##Wire Frames
![What-A-Mole](https://user-images.githubusercontent.com/101548840/162060307-a68218d1-0e6d-40d3-800a-f568a5ff24ac.png)
![Whack-a-Mole2](https://user-images.githubusercontent.com/101548840/162064740-81cab9e4-9fd5-4181-8fdd-920c2bcea530.png)




##MVP Goals
As a player I want to be able to whack the mole when I click the mouse on the mole image.
When the mole is successfully clicked I want the scoreboard to update by adding 1 point per mole.
When the time limit is reached, the game will end. 

##Strech Goals
I want to be able to keep track of previous game scores in a highscore board.
I would like to add a golden mole that will give user 5 points and a black mole that will take away 5 points when clicked(whacked).
