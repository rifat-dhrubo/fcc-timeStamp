const timeNow = (req, res) => {
	const date = new Date();

	res.json({
		unix: Number(date.getTime()),
		utc: date.toUTCString(),
	});
};

const timeValidate = (req, res) => {
	const { date_string } = req.params;

	const regex = new RegExp(/^\d+$/, 'g');
	const test = regex.test(date_string);

	let date;
	if (test) {
		const num = Number(date_string);
		date = new Date(num);
	} else {
		date = new Date(date_string);
	}

	if (isNaN(date.getTime())) {
		res.json({
			error: 'Invalid Date',
		});
	} else {
		res.json({
			unix: Number(date.getTime()),
			utc: date.toUTCString(),
		});
	}
};

module.exports = { timeNow, timeValidate };
