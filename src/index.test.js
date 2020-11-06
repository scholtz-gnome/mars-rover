const { roverMove } = require("./index");

test("should return: 0 3 N", () => {
  expect(roverMove("10 10", ["0 0 N", "MMM"])).toStrictEqual("0 3 N");
});

test("should return: 1 3 N | 5 1 E", () => {
  expect(roverMove("5 5", ["1 2 N", "LMLMLMLMM"], ["3 3 E", "MMRMMRMRRM"])).toStrictEqual("1 3 N | 5 1 E");
}); 

test("should return: 0 3 N | 4 1 E | 3 6 N", () => {
  expect(roverMove("10 10", ["0 0 N", "MMM"], ["1 1 E", "MMM"], ["3 3 N", "MMM"])).toStrictEqual("0 3 N | 4 1 E | 3 6 N");
});

test("should return: 0 3 N | 4 1 E | This rover can't move there", () => {
  expect(roverMove("10 10", ["0 0 N", "MMM"], ["1 1 E", "MMM"], ["3 3 N", "MMMMMMMM"])).toStrictEqual("0 3 N | 4 1 E | This rover can't move there");
});