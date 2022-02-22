const {name1, name2, name3} = require("./config.js");
const format  = [name1,name2,name3];
const output_nmbr = 10;
const delimiter = "";

for (let i=0 ;i <output_nmbr; i++){ 
    const create = () => {
        let output =[];
        format.forEach((list) => {
            let word = list[Math.floor(Math.random() * list.length)];
            output.push(word);
        })
        return output.join(delimiter).replace(/\,/g, '');
    }
    console.log(create());
}
