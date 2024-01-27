const express = require('express');
const app = express();

// app.use(function(req, res, next){
//   next();
// })   

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/contact', function (req, res) {
  res.render('contact');
})

app.get('/error', function (req, res, next) {
  throw Error("Something went wrong");
})
    
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

// app.get('/profile/:username', function (req, res) {
//   res.render(`Hello from ${req.params.username}`)
//  })

app.listen(3000);