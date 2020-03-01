const express = require('express');
const path = require('path');
const app = express();
const timeStampRouter = require('./resources/timeStamp.router');

const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.use('/api/timestamp', timeStampRouter);

app.use((req, res) => {
	return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

const listener = app.listen(process.env.PORT || 3000, function() {
	console.log(`App is listening on port ${listener.address().port}`);
});
