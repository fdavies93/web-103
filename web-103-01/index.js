const express = require('express')
const app = express()
app.use(express.static('web'))

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.get('/book', function (req, res) {  
  res.json({
    "title": "Love in the Time of Cholera",
    "year": "1985",
    "description": "In their youth, Florentino Ariza and Fermina Daza fall passionately in love. When Fermina eventually chooses to marry a wealthy, well-born doctor, Florentino is heartbroken, but he is a romantic. As he rises in his business career he whiles away the years in 622 affairs—yet he reserves his heart for Fermina. Her husband dies at last, and Florentino purposefully attends the funeral. Fifty years, nine months, and four days after he first declared his love for Fermina, he will do so again."
  })
})

app.get('/movie', function (req, res) {
  res.json({
    "title": "Roman Holiday",
    "year": "1953",
    "description": "A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome."
  })
})

app.listen(3000)
