#Creating a path
import path and fs (filesystem)

var dataPath= path.join(__dirname, '../data.json')
*   this constructs our path the file that we want to read. we go      back a directory and grab the data.json file hence the ../

#first argument is the path name you want to read. and second is a callback function 
fs.readFile(dataPath,{
    encoding:"UTF-8", (normal file coding)

},(err,data)=>{ -- after the file is read put all the contents into the data variable
    console.log(data);
})

#now that we know the data is in this data.json file, we can parse it into a javascropt object

var person= JSON.parse(data); --> data is the string that we want to turn into a js object and then we can access its properties

console.log(person.name)
console.log(person.shirtColor)

______________________________

#setting up a node project

*   go into your project folder and run npm init
*   answer the questions 
*   it will create a package.json file 

# going out and getting articles from reddit and writing them to a file

*   npm install request --save --> this will install a node_modules folder and add request to our package.json
*   add let request=require('request')to the top of your server.js file
*   we want to write it to the data.json file

const path= require('path');
const fs= require('fs')
const request = require('request')

let dataPath = path.join (__dirname, '../data.json')

# going to reddit and grabbing this data and write it to a file at the dataPAth Path and we want to write out the response.body 

//request('https://reddit.com/r/popular.json',  (err, res, body) =>{
    if(err) console.log(err); --> if we get an error we just want to know 

    console.log(res) -->we want to see the response to make sure it works
//run node server/server.js

# write to the datajson file

fs.writeFile(dataPath, res.body, err =>{
    if(err) console.log(err);
    })
});

# write out the titles of the articles-- we want to loop through all of the children
* JSON.parse(body)- if the body object is a string it will turn it into json

JSON.parse(body).data.children.forEach(item => {
    console.log(item.data.title);
    });

# append the file

JSON.parse(body).data.children.forEach(item => {
   fs.appendFileSync(dataPath, item.data.title + '\n'); 
   
   *    \n will give us a new line in a text file
   *    theres readFile, writeFile and AppendFile
   *    appendFileSync means that it will run synchronously in          order
   *    run node server/sever.js