const express = require('express');
const projectorRouter = require('./routes/projectorRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname));
app.use('/api', projectorRouter);

app.listen(PORT, () => {
    console.log(`Сервер працює на порті http://localhost:${PORT}`);
});