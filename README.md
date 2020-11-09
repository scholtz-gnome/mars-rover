# Mars Rover Challenge
A group of rovers are being deployed on the surface of Mars by NASA. Given the extent of the plateau and a set of instructions, these rovers will scan the surrounding landscape for any form of life. What will they find?

## Setting Up Mars Rover
This challenge was completed using JavaScript in Node.js. The packages required in this challenge are `"jest"` and `"prompt-sync"`. After cloning this repo, run `npm install` to install the required modules.

The code is found in the `src/` directory. The solution is found in `index.js`. `app.js` contains the terminal interface and `index.test.js` contains the automated unit tests for `index.js`.

## Playing Mars Rover
The console interface of the game is accessed by running `npm start` in the terminal. This will run `app.js` in the terminal. Follow the prompts to play the game. See the example below:

```
$ npm start

> mars-rover@1.0.0 start C:\Users\schol\OneDrive\Desktop\projects\mars-rover
> node src/app

Enter plateau top-right coordinates: 5 5
How many rovers will be landing? 2
Enter Rover 1 coordinates: 2 3 N
Enter Rover 1 instructions: MRMM
Enter Rover 2 coordinates: 3 3 N
Enter Rover 2 instructions: MMM
Rover 2 can't move to coordinates (x: 3 y: 6)
Rover 1: 4 4 E || Rover 2: 3 5 N
Mission accomplished, commander!
```

## Testing Mars Rover
To run the automated unit tests, run `npm test` in the terminal. Inside `src/index.test.js`, we have 7 unit tests and a commented-out test should you want to run your own. The first test checks the `roverMove()` function with the example given in the [challenge](https://code.google.com/archive/p/marsrovertechchallenge/). The others check the basic operations of `roverMove()`.

## Assumptions About The Challenge
1. I assume the coordinates for each rover and its respective instructions will be given as an array with two elements.

2. I assume the top-right plateau coordinates are provided in order to limit the extent of the rovers.

## Code Explained
The challenge is solved with a single function, `roverMove()`. This function expects 2 arguments:

1. A string of characters representing the coordinates for the grid block in the top right of the plateau. The grid block in the bottom left is assumed to be "0 0".

2. An array (or multiple arrays) with two elements, representing the rover. The first element in the array is a string of characters representing the current position of the rover. The second element in the array is a string of characters representing the instructions given to the rover.

The function is quite simple, although the control flow within the second `forEach()` method is somewhat complex. The first `forEach()` method loops through all rovers passed in as an array to the function. The second `forEach()` loops through each instruction given to a specific rover.

The control flow within the second `forEach()` method reassigns the values of the rover's position (whether that be its x/y coordinates or the direction its facing), while checking this against the size of the plateau. If an instruction takes the rover past the bounds of the plateau, an error message is returned and the rover's coordinates will not be reassigned beyond the bounds of the plateau.
