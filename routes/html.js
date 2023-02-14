const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html')));
// get homepage

router.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html')));
// get notes page

module.exports = router;