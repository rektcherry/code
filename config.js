var  fs  = require("fs");
var txt = fs.readFileSync("./textfile.txt", "utf-8");
var names = txt.split("\n"); 
var step = 3 ; //step to go through txt file

// these store the words and are later used to make combinations
const name1 = []; 
const name2 = [];
const name3 = [];

// this divides the text file into three name lists
for (i = 0; i < names.length; i=i+step) {
    name1.push(names[i]);
}
for (i = 1; i < names.length; i=i+step) {
    name2.push(names[i]);
  }
for (i = 2; i < names.length; i=i+step) {
    name3.push(names[i]);
  }

module.exports = {name1, name2, name3};