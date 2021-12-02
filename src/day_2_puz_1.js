var fs = require('fs');
var debug = require('debug')('puz1');
// JSON.parse(fs.readFileSync(process.argv[2]).toString())
var response = fs.readFileSync(process.argv[2]);

var horizontal = 0;
var depth = 0;

var debugEnable = require('debug');
// debugEnable.enable('puz1');

console.log("\nInput File: %s\n", process.argv[2]);

var lines = response.toString().split('\n');
for (var line = 0; line < lines.length; line++) {
  // The last element is always empty
  if (lines[line].length > 0) {
    var movement = lines[line].split(' ')[0];
    var amount = parseInt(lines[line].split(' ')[1]);

    switch (movement) {
      case "forward":
        horizontal = horizontal + amount;
        break;
      case "up":
        depth = depth - amount;
        break;
      case "down":
        depth = depth + amount;
        break;
    }
    debug("Movement %s, Amount %d, Horizontal %d, Depth %d", movement, amount, horizontal, depth);
  }
}

var result = horizontal * depth;
console.log("day 2 puzzle 1 - Horizontal %d, Depth %d, Result %d", horizontal, depth, result);

// Start of Puzzle 2

debug = require('debug')('puz2');

debugEnable = require('debug');
// debugEnable.enable('puz2');

horizontal = 0;
depth = 0;
var aim = 0;

lines = response.toString().split('\n');
for (line = 0; line < lines.length; line++) {
  // The last element is always empty
  if (lines[line].length > 0) {
    movement = lines[line].split(' ')[0];
    amount = parseInt(lines[line].split(' ')[1]);

    switch (movement) {
      case "forward":
        horizontal = horizontal + amount;
        depth = depth + (aim * amount);
        break;
      case "up":
        // depth = depth - amount;
        aim = aim - amount;
        break;
      case "down":
        // depth = depth + amount;
        aim = aim + amount;
        break;
    }
    debug("Movement %s, Amount %d, Horizontal %d, Depth %d, Aim %d", movement, amount, horizontal, depth, aim);
  }
}

result = horizontal * depth;
console.log("day 2 puzzle 2 - Horizontal %d, Depth %d, Aim %d, Result %d", horizontal, depth, aim, result);
