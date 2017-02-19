'use strict';

class Note {
    constructor(props) {
        this.name = props.name;
        this.text = props.text;
    }

    save() {
        storageInMemory.push(this)
    }

    static find(name) {
        return storageInMemory
            .filter(note => note.name === name)
            .pop();
    }

    static findAll() {
        return storageInMemory;
    }
}

const storageInMemory = [
    new Note({
        name: 'films',
        text: 'Films to watch'
    }),
    new Note({
        name: 'books',
        text: 'Books to read'
    })
];

module.exports = Note;
