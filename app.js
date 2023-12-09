const express = require('express');
const projectorRouter = require('./projector.routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname)); // Виправлення тут: __dirname замість dirname
app.use('/api', projectorRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Виправлення тут: __dirname замість dirname
});

app.listen(PORT, () => {
    console.log(`Сервер працює на порті http://localhost:${PORT}`); // Виправлення тут: використання обратних апострофів для відображення значення PORT
});
