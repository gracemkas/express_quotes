const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static('server/public'));

app.listen(PORT, function() {
    console.log('App is running on ', PORT);
  });

//create quote array
let quotes = [{
    text: 'Whatever you do, do it well.',
    author: 'Walt Disney'
},{
    text: 'What we think, we become.',
    author: 'Buddha'
},{
    text: 'Heroes never die.',
    author: 'Mercy'
}];

//set up quote path
app.get('/quotes', function(req, res){
    res.send(quotes);
});

app.post('/quotes', function(req, res){
    console.log('here is req.body', req.body);
    quotes.push(req.body);
    console.log(quotes);
    res.sendStatus(201);
})
