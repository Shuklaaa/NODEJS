const fs = require('fs');

// fs.readFile('file.txt', 'utf-8', (err, data)=>{
//     console.log(err, data);
// })

// console.log("This line will be printed first"); // this is because node js works on NON BLOCKING IO MODEL

// IF WE INTENTIONALLY WANT TO BLOCK WE USE readFIleSYnc

const a = fs.readFileSync('file.txt');
console.log(a.toString());

console.log("finished readin file");

// fs.writeFile('file2.txt', "This is a data", ()=>{
//     console.log("Written to the file")
// });

b = fs.writeFileSync('file2.txt', "This is a data2")
console.log(b)
console.log("Finished reading file")