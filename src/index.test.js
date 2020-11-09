const { roverMove } = require("./index");

test("example test", () => {
  expect(roverMove("5 5", ["1 2 N", "LMLMLMLMM"], ["3 3 E", "MMRMMRMRRM"])).toStrictEqual("Rover 1: 1 3 N || Rover 2: 5 1 E");
}); 

test("stays in same location", () => {
  expect(roverMove("5 5", ["0 0 N", ""])).toStrictEqual("Rover 1: 0 0 N");
});

test("rotate rover 90 degrees", () => {
  expect(roverMove("10 10", ["0 0 N", "R"])).toStrictEqual("Rover 1: 0 0 E");
});

test("move rover one block", () => {
  expect(roverMove("10 10", ["0 0 N", "M"])).toStrictEqual("Rover 1: 0 1 N");
});

test("move two rovers", () => {
  expect(roverMove("10 10", ["0 0 N", "MMM"], ["1 1 E", "MMM"])).toStrictEqual("Rover 1: 0 3 N || Rover 2: 4 1 E");
});

test("log error in console and return the coordinates after following the remaining instructions", () => {
  expect(roverMove("5 5", ["0 0 N", "MMMMMM"])).toStrictEqual("Rover 1: 0 5 N");
});

test("move three rovers and log an error for one rover", () => {
  expect(roverMove("10 10", ["0 0 N", "MMM"], ["1 1 E", "MMM"], ["3 3 N", "MMMMMMMM"])).toStrictEqual("Rover 1: 0 3 N || Rover 2: 4 1 E || Rover 3: 3 10 N");
});

/* Write Your Own Test:
test("custom test", () => {
  expect(roverMove()).toStrictEqual("");
});
*/