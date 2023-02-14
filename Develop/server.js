const express = require('express');
const path = require('path');
const notes = require('./routes/notes');
const html = require('./routes/html');

const app = express();
const PORT = process.env.PORT || 3002;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', notes);
app.use('/', html);
// middleware 

app.use(express.static('public'));




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));