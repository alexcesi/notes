const { createNote, fetchAllNotes, updateNote, deleteNote } = require('./model');
const { getTime } = require('./helper');

exports.createNewNote = async (req, res) => {
    //title, desc, archive, createdAt, updatedAt
    try{
        let currentTime = getTime();
        let newNote = {
            title: 'Untitled',
            desc: '',
            createdAt: currentTime,
            updatedAt: currentTime
        }
        let id = await createNote(newNote)
        newNote['_id'] = id;
        res.status(200).send(NewNote);
    }
    catch(ex){
        res.status(400).send(ex.message)
    }
}

exports.getAllNotes = async (req, res) => {
    try{
        let query = {
            archive: 0
        };
        if(req.parmas.type == 'trash'){
            query.archive = 1;
        }
        await fetchAllNotes(query);
        res.status(200).send(data);
    }
    catch(ex){
        res.status(400).send(ex.message);
    }
}

exports.updateNoteById = async (req, res) => {
    try{
        let currentTime = getTime();
       let query = {
           ...req.body,
           updatedAt: currentTime
       }
        await updateNote(req.params.id, query);
        res.status(200).send(query);
    }
    catch(ex){
        res.status(400).send(ex.message);
    }
}

exports.deleteNote = async (req, res) => {
    try {
        await this.deleteNote(req.params.id);
        res.status(200).send(id);
    }
    catch(ex) {
        res.status(400).send(ex.message);
    }
}