const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static(path.join(__dirname, '/api/notes')));
// for use in get/post routes.

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));