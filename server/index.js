const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const fileRoutes = require('./routes/fileUploaderRoutes');
const app = express();

require('./database')();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));