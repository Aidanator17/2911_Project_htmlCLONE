const express = require("express");
const session = require("express-session");
const path = require("path");
const port = process.env.PORT || 8000;

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

app.get("/", (req,res) => {
    res.render("index")
})

app.listen(port, () => {
  console.log(`🚀 Server has started on port ${port}`);
});


