const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

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
