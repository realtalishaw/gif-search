// Require Libraries
const express = require('express');

// App Setup
const app = express();

//Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
//example URL "http://localhost:3000/?term=hey"
app.get('/', (req, res) => {
    res.render('home')
    console.log(req.query) // => "{ term: hey }"
});

//Start Server
app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});
