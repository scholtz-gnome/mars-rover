exports.roverMove = (plateau, ...rovers) => {

  const plateauArray = plateau.split(" ");
  const gridX = Number(plateauArray[0]);
  const gridY = Number(plateauArray[1]);

  let allRovers = [];

  rovers.forEach(rover => {

    let position = rover[0].split(" ");
    const instructions = rover[1].split("");

    let x = Number(position[0]);
    let y = Number(position[1]);
    let direction = position[2];

    instructions.forEach(instruction => {

      if (instruction === "R") {
        if (direction === "N") {
          direction = "E";
        } else if (direction === "E") {
          direction = "S";
        } else if (direction === "S") {
          direction = "W";
        } else if (direction === "W") {
          direction = "N";
        }
      } else if (instruction === "L") {
        if (direction === "N") {
          direction = "W";
        } else if (direction === "E") {
          direction = "N";
        } else if (direction === "S") {
          direction = "E";
        } else if (direction === "W") {
          direction = "S";
        }
      }

      if (instruction === "M") {
        let newX = x;
        let newY = y;

        if (direction === "N") {
          newY += 1;
        } else if (direction === "E") {
          newX += 1;
        } else if (direction === "S") {
          newY -= 1;
        } else if (direction === "W") {
          newX -= 1;
        }
        if (newX > gridX || newY > gridY || newX < 0 || newY < 0) {
          allRovers.push("This rover can't move there");
        } else {
          x = newX;
          y = newY;
        }
      }
    });
    allRovers.push(`${x} ${y} ${direction}`);
  });

  return allRovers.join(" | ");

}