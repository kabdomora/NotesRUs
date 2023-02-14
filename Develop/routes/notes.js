// routes for api calls for notes recall

const note = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
// import helpers and express router

note.get('/', (req, res) => readFromFile('./db/note.json').then((data) => res.json(JSON.parse(data))));
// get route to recall saved notes to sidebar

note.get('/:id', (req, res) => {
    const savedNote = req.params.id;
    readFromFile('./db/note.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((thisNote) => thisNote.id === savedNote);
            return result.length > 0
            ? res.json(result)
            : res.json('Try again! This note does not exist');
        });
});
// return a single note to the display panel

note.post('/', (req, res) => {
    const { title, text, id } = req.body;

    if ( title && text ) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/note.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error! Cannot save new note');
    }
});
// add a new note to storage

note.delete('/:id', (req, res) => {
    const savedNote = req.params.id;
    readFromFile('./db/note.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((thisNote) => thisNote.id !== savedNote);
            writeToFile('./db/note.json', result);
            res.json(`The note with ID#${savedNote} has been deleted`);
        });
});
// delete a note

