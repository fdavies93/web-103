const express = require('express')
const app = express()
app.use(express.text())

app.get('/', function (req, res) {
  res.status(200)
  res.send("This is a normal response.")
})

app.get('/301', function(req, res) {
  res.status(301)
  res.setHeader("Location","https://fd93.me")
  res.send()
})

app.get('/400', function(req, res) {
  res.status(400)
  res.setHeader("Content-Type","text/plain")
  res.send("It's not me, it's you.\nBad request.")
})

app.get('/500', function(req, res) {
  res.status(500)
  res.setHeader("Content-Type","text/plain")
  res.send("It's not you, it's me.\nServer error.")
})

app.get('/418', function(req, res) {
  res.sendStatus(418)
})

app.post('/', function (req, res) {
  if (req.body.length == 0) {
      res.status(400)
      res.send("Invalid input.")
  }
  else {
    res.status(200)
    res.setHeader("Content-Type","text/plain")
    res.send(req.body)
  }
  
})

app.listen(3000)
