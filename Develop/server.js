const express = require('express');
const path = require('path');
const notes = require('./routes/notes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', notes);
app.use('/', htmlRoutes);
// middleware 

app.use(express.static('public'));


app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html')));
// get homepage

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html')));
// get notes page

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));