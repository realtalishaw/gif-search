// Require Libraries
const express = require('express');
// Require tenorjs near the top of the file
const Tenor = require('tenorjs').client({
    "Key": "G7HXSQ0460KY",
    "Filter": "high",
    "Locale": "en_US",
});

// App Setup
const app = express();

//Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
app.get('/', (req, res) => {
    term = ""
    if (req.query.term) {
	term = req.query.term
    }
    // Tenor.search.Query("SEARCH KEYWORD HERE", "LIMIT HERE")
    Tenor.Search.Query(term, "10")
        .then(response => {
	    // store gifs we get back from the search
	    const gifs = response;
	    //pass the gifs as an object into the home page
	    res.render('home', { gifs })
	}).catch(console.error);
});



//Start Server
app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});
