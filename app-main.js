const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')

 app.use(cors())

 
const url = 'https://www.theguardian.com/uk'

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results', (req, res) => {
    axios(url)
        .then(response => {
            
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            // Get title and Url  
            $('.fc-item__title', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })
            
            const convert = require('./utils/csv-converter')

            // Convert to csv
            convert(articles)
            
            // Send json response
            res.json(articles)

        }).catch(err => console.log(err))

})

module.exports = app;