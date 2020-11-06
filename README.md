# Mars Rover Challenge

## Running Mars Rover
The only package required in this challenge is Jest for automated unit testing. After cloning this repo, run `npm install`. This will install Jest. Inside package.json, we are using `jest --watch index.test.js`, such that running `npm test` will run the tests found in `src/index.test.js` will watch for any changes and run the test afresh. Inside `src/index.test.js`, we have 3 simple unit tests. The first two check `roverMove()` against the two tests provided in the [challenge](https://code.google.com/archive/p/marsrovertechchallenge/). The third test checks whether Rover will return some error if it is given an instruction to move beyond the scope of the plateau.

## Assumptions About The Challenge
I assume the coordinates for each rover and its respective instructions will be given as an array.

## Code Explained
The challenge is solved with a single function, `roverMove()`. This function expects 3 arguments:

1.) A string of characters representing the x and y coordinates of the rovers position, and a letter representing a cardinal point, e.g., ("2 1 E"). This means Rover is at coordinates 2 on the x-axis, 1 on the y-axis and currently facing East.

2.) A string of characters representing the instructions received from NASA. These will either give a command to turn 90 degrees to the left or right, or a command to move one grid space in the direction Rover is currently facing.

3.) A string of characters representing the coordinates for the grid block in the top right of the plateau. The grid block in the bottom left is assumed to be "0 0".

The function is quite simple, although the control flow within the `forEach()` method is somewhat complex. After transforming the inputs into arrays, we then assign the values of the first input (the Rover's current position coordinates) to variables `x`, `y` and `point`. We then loop through each letter (insruction) in the instructions array and reassign the values of the `x`, `y` and `point` variables where necessary. 

After going through each instruction, we make one final check. 