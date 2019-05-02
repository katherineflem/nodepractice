const path= require('path')
const fs= require('fs')

//PART 1
//create array of 5 chirp objects
let chirpArray = [
    {chirp: "1"},
    {chirp: "2"},
    {chirp: "3"},
    {chirp:"4"},
    {chirp: "5"}
]

//create path to chirps.json

let dataPath = path.join (__dirname, '../chirps.json')

//write the arrays to the dataPath file but change to json first
fs.writeFile(dataPath, JSON.stringify(chirpArray), err =>{
    if (err) console.log(err)
    console.log(chirpArray)
});

//reading the files contents and creating a callback function to call after its read the file
fs.readFile(dataPath, {
    encoding: 'UTF-8'
}, (err, chirps)=>{
console.log(chirps)})