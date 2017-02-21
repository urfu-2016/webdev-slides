'use strict';

const Note = require('../models/note');

exports.list = (req, res) => {
    const notes = Note.findAll();
    const data = Object.assign({ notes: notes }, res.locals);

    res.render('index', data);
};

exports.item = (req, res) => {
    const name = req.params.name;
    const note = Note.find(name);
    const data = Object.assign({ note: note }, res.locals);

    if (note) {
        res.render('note', data);
    } else {
        res.sendStatus(404);
    }
};

exports.create = (req, res) => {
    const note = new Note({
        name: req.body.name,
        text: req.body.text
    });

    note.save();

    res.sendStatus(201);
};
