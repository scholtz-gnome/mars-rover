const { roverMove } = require("./index");
const prompt = require("prompt-sync")();

const plateau = prompt("Enter plateau top-right coordinates: ");
const rovers = Number(prompt("How many rovers will be landing? "));

const allRovers = [];

for (let i = 0; i < rovers; i++) {
  const coordinates = prompt(`Enter Rover ${i + 1} coordinates: `);
  const instructions = prompt(`Enter Rover ${i + 1} instructions: `).toUpperCase();
  allRovers.push([coordinates, instructions]);
}

console.log(roverMove(plateau, ...allRovers));

console.log("Mission accomplished, commander!");