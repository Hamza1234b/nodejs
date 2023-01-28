const express = require("express")

const app = express()
app.get("/", (req, res) => {
  res.send("<h1>Dobrodošli</h1>")
})
app.get("/search", (req, res) => {
  res.send("<h1>Tražilica</h1>")
})
app.get("/help", (req, res) => {
  res.send("<h1>Uputstva za navigiranje stranicom</h1>")
})
app.get("/signup", (req, res) => {
  res.send("<h1>Signup page</h1>")
})
app.get("/signin", (req, res) => {
  res.send("<h1>Signin page</h1>")
})

app.listen(5000)
