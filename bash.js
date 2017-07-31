
var controls = require("./commands.js");
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().split(" "); // remove the newline
  var first = cmd[0].trim();
  var arg = cmd.slice(1)||undefined;
  controls[first](arg, done);
//   var date = new Date();
// console.log(date)date;



});

var done = function(output){
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}
