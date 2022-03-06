var  fs  = require("fs");
var adj = fs.readFileSync("./nounFile.txt", "utf-8")
adj = adj.toString().replace(/\r\n/g,'\n').split('\n');
var noun = fs.readFileSync("./adjFile.txt", "utf-8");
noun = noun.toString().replace(/\r\n/g,'\n').split('\n');
module.exports = {adj, noun};