const path = require('path')
const fs = require('fs')
const rp = require('request-promise')
//naming the path you want the info to go into
let dataPath = path.join(__dirname, 'popular-articles.json')

let array = []
//PART 2
//install request and save in package.json
//grab the uri and extract each article title, url, and author
//push each extracted article into an array 
//write the array to a file in the root
const articles = {
    method: 'GET',
    uri: 'https://reddit.com/r/popular.json',
    json: true //stringifies the body automatically
}
rp(articles) //when the articles are received, you want to get the bodys, data's children and loop through to get each item in the array
//you want to push the following info into the blani array you defined
    .then((body) =>
        body.data.children.forEach(item => {
            array.push({
                Title: item.data.Title,
                URL: item.data.url,
                Author: item.data.author,
                Media: item.data.media
            })

            fs.writeFile(dataPath, JSON.stringify(array), err => {
                if (err) console.log(err)
            });
        })
            .catch(err => {
                if (err) console.log(err)
            }))
