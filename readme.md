# Web sraper
  Extracts all titles and coresponding urls  from a web page in json format   Cheerio to pick out html element  (css)  from html elements on a web page. After collection the dat will then be convert to CSV file using json-2-csv


            $('.fc-item__title', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })

# Dependencies
  "axios": "^0.27.2",
  "cheerio": "^1.0.0-rc.12",
  "cors": "^2.8.5",
  "express": "^4.18.1",
  "json-2-csv": "^3.17.1"