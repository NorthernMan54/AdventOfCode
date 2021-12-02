var fs = require('fs');
var debug = require('debug')('aoc');
// JSON.parse(fs.readFileSync(process.argv[2]).toString())
var response = fs.readFileSync('data/day_1_puz_1');

// console.log(response);
//

var previous = null;
var count = 0;

var a, b, c, d = 0;

var lines = response.toString().split('\n');
for (var line = 0; line < lines.length; line++) {
  // The last element is always empty
  if (lines[line].length > 0) {
    var result = "";
    var input = parseInt(lines[line]);
    if (previous === null) {
      result = "N/A - no previous measurement";
    } else if (input > previous) {
      result = "Increased";
      count++;
    } else {
      result = "Decreased";
    }
    debug(input, result);
    previous = input;
  }
}

console.log("day 1 puzzle 1 - Count ", count);

var debugEnable = require('debug');
debugEnable.enable('aoc');

previous = null;
count = 0;

lines = response.toString().split('\n');
for (line = 0; line < lines.length; line++) {
  // The last element is always empty
  if (lines[line].length > 0) {
    result = "";
    input = parseInt(lines[line]);
    d = c;
    c = b;
    b = a;
    a = input;

    if (line > 2) {
      if ((a + b + c) > (b + c + d)) {
        result = "Increased";
        count++;
      } else if ((a + b + c) === (b + c + d)) {
        result = "No change";
      } else {
        result = "Decreased";
      }
      debug(b + c + d, result);
    }
  }
}

console.log("day 1 puzzle 2 - Count ", count);
