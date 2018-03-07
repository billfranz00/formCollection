const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// View Engine --> PUG
app.set('view engine', 'pug');
app.use(express.static(__dirname + "/assets"));

// Use Body Parser for collecting data
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	return res.render('index');
});

app.get('/create', function(req, res) {
	return res.render('new-user');
});

// Form submit using GET request
// app.get("/create-new-user", function(req, res) {
// 	return res.send(req.query);
// });

//Form submit via POST request
app.post("/create-new-user", function(req, res) {
	return res.send(req.body);
});

app.listen(3000, function() {
	console.log('Server running, head over to localhost:3000');
});