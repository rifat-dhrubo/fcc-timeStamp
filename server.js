const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/api/timestamp', function(req, res) {
	const date = new Date();
	res.json({
		unix: date.getTime(),
		utc: date.toUTCString(),
	});
});
app.get('/api/timestamp/:date_string', function(req, res) {
	const { date_string } = req.params;
	const date = new Date(date_string);
	res.json({
		unix: Number(date.getTime()),
		utc: date.toUTCString(),
	});
});

const listener = app.listen(process.env.PORT || 3000, function() {
	console.log(`App is listening on port ${listener.address().port}`);
});
