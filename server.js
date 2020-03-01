const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/api/hello', function(req, res) {
	res.json({ greeting: 'hello API' });
});

const listener = app.listen(process.env.PORT || 3000, function() {
	console.log('Your app is listening on port ' + listener.address().port);
});
