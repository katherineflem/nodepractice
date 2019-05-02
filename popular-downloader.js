const path = require('path')
const fs = require('fs')
const rp = require('request-promise')

const articles = {
    method: 'GET',
    uri: 'https://reddit.com/r/popular.json',
}
//need to create a path with the file extension for images
//go through all the top reddit posts, get image url and download the image
rp(articles)
    .then((body) => {
        JSON.parse(body).data.children.forEach(item => {
            //if the item is an url with an image, download it 
            //use path.extname here to see if url has .jpg .gif or .png
            let baseUrl = item.data.url
            let ext = path.extname(baseUrl)
            if (ext === '.png' || ext === '.gif' || ext === '.jpg') {
                const media = {
                    method: 'GET',
                    url: baseUrl,
                    encoding: 'base64'
                }
                rp(media)
                    .then((media => {
                        fs.writeFile(`./downloads/${item.data.id}${ext}`, media, 'base64', err=>{
                            if(err) console.log(err)
                        })
                    }))
            }
        });
    }).catch(err => console.log(err))




