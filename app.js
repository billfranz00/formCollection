const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + "/assets"));

app.get('/', function(req, res) {
	return res.render('index');
})

app.get('/create', function(req, res) {
	return res.render('new-user');
})

// Form submit using GET request
app.get("/create-new-user", function(req, res) {
	return res.send(req.query);
});

app.listen(3000, function() {
	console.log('Server running, head over to localhost:3000');
})