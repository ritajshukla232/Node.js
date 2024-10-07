const express = require('express');
const app = express();
const path = require('path');
const publicpath = path.join(__dirname, );
app.set('view engine', 'ejs');

app.get('',(req,res)=>{
    res.send(`<h1> hello this is home page </h1>
        <a href ="/about">about page </a> <br>
        <a href ="/login"> login page </a> <br>
        <a href ="/contact"> contact page </a>`)

});

app.get('/about',(req,res)=>{
    res.send(`<h1> hello this is about page </h1>
        <a href ="/"> Home page </a>`)

});

app.get('/login',(req,res)=>{
    res.send(`<h1> hello this is Login page </h1>
        <a href ="/"> Home page </a>`)

});

app.get('/contact',(req,res)=>{
    res.send(`<h1> hello this is Contact page </h1>
        <a href ="/"> Home page </a>`)

});
app.get('*',(req,res)=>{
    res.sendfile(`${publicpath}/h.html`)

});
app.get('/profile',(req,res)=>{
    res.render('profile')
} )

app.listen(3600);

