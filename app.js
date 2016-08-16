const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.use(serve);

function serve(req, res, next) {
	if (req.accepts('html')) res.sendFile(__dirname + '/index.html');
	next();
}

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
