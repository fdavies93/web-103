const express = require("express")
const nunjucks = require("nunjucks")
const fs = require("fs")

const app = express()
const process = require("process")
process.chdir(__dirname)

const products = JSON.parse(fs.readFileSync("products.json"))

app.get("/", function (req,res) {
  const index = nunjucks.render("index.html", {products: products})
  res.setHeader("Content-Type","text/html")
  res.send(index)
})

app.get("/product/:id", function (req, res) {
  const page = nunjucks.render("product.html", {product: products[req.params.id]})
  res.setHeader("Content-Type","text/html")
  res.send(page)
})

app.get("/api/product/:id", function(req, res) {
  if(Object.hasOwn(req.query,"size")) {
    res.status(200)
    res.setHeader("Content-Type","text/plain")
    return res.send(products[req.params.id].styles[req.query.size])
  }
  return res.sendStatus(400)
})

app.listen(3000)
