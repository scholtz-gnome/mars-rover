# Mars Rover Challenge

## Running Mars Rover
The only package required in this challenge is Jest for automated unit testing. After cloning this repo, run `npm install`. This will install Jest.

Inside package.json, we are using `jest --watch index.test.js`, such that running `npm test` will run the tests found in `src/index.test.js` afresh after the code is changed. Inside `src/index.test.js`, we have 4 unit tests. Two tests check `roverMove()` against the two tests provided in the [challenge](https://code.google.com/archive/p/marsrovertechchallenge/). The others check that the function works with only one rover passed to it and that an error is returned if the instructions move a rover too far.

## Assumptions About The Challenge
I assume the coordinates for each rover and its respective instructions will be given as an array with two elements.

## Code Explained
The challenge is solved with a single function, `roverMove()`. This function expects 2 arguments:

1.) A string of characters representing the coordinates for the grid block in the top right of the plateau. The grid block in the bottom left is assumed to be "0 0".

2.) An array (or multiple arrays) with two elements, representing the rover. The first element in the array is a string of characters representing the current position of the rover. The second element in the array is a string of characters representing the instructions given to the rover.

The function is quite simple, although the control flow within the second `forEach()` method is somewhat complex. The first `forEach()` method loops through all rovers passed in as an array to the function. The second `forEach()` loops through each instruction given to a specific rover.

The control flow within the second `forEach()` method reassigns the values of the rover's position (whether that be its x/y coordinates or the direction its facing), while checking this against the size of the plateau. If an instruction takes the rover past the bounds of the plateau, an error message is returned.