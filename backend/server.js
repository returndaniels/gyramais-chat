const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

require('dotenv').config();

const port = process.env.PORT || 4200;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/auth', authRoutes);

app.listen(port, console.log(`Server running on ${port}`));