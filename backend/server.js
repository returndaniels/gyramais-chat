const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/user');

require('dotenv').config();
require('./database');

const port = process.env.PORT || 4200;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', authRoutes);

app.listen(port, console.log(`Server running on ${port}`));