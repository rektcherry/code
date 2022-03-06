var {adj, noun} = require("./config.js");
const format  = [adj,noun];
const output_nmbr = 10; // add the number of names to generate

const create = () => {  // start creating
    let output = []
    for (let i=0 ;i < output_nmbr; i++){ 
        format.forEach((list) => {
            let word = list[Math.floor(Math.random() * list.length)]; // get random word
            output.push(word); // push word to output array
        }) 
        output.push('\n'); //add line break to separate words
    }   
    return output.join('').slice(0,-1); // join words on the same line and remove last linebreak
}  
console.log(create());