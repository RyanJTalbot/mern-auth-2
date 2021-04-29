const express = require('express');

const app = express();

app.get('/api/signup', (req, res) => {
	res.json({
		data: 'you hit signup enpoint',
	});
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`API is running on port ${port}`);
});