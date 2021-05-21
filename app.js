const express = require("express");
const session = require("express-session");
const path = require("path");
const port = process.env.PORT || 8000;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const fetch = require('node-fetch');
const { Console } = require("console");
let sites = ['https://chessresults.herokuapp.com', 'http://localhost:8000']
let sitenum = 0

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// Middleware for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log('User details are: ');
//   console.log(req.user);
//   next();
// });

app.get("/", (req, res) => {

  fetch(sites[sitenum] + '/matchdb').then(function (res) {
    return res.text();
  }).then(function (body) {
    let matchesr = JSON.parse(body)
    let matches = matchesr.reverse()
    res.render("index", { matches })
  })

})

app.get("/matchdb", async (req, res) => {
  try {
    const matches = await prisma.match.findMany()
    // console.log(matches)
    return res.json(matches)
  } catch (err) {
    return res.status(500).json({ error: String(err) })
  }
})

app.get("/match/:id", async (req, res) => {
  fetch(sites[sitenum] + '/matchdb').then(function (res) {
    console.log(res.text)
    return res.text();

  }).then(function (body) {
    matches = JSON.parse(body)
    let smatch
    for (i in matches){
      if (matches[i].match_id == req.params.id){
        smatch = matches[i]
      }
    }
    res.render("match", { match:smatch })
  })
})

// app.listen(port, () => {
//   console.log(`🚀 Server has started on port ${port}`);
// });


module.exports = app

// export default app
