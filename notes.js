import fs from 'fs';
import chalk from 'chalk';

// const notesBuffer = fs.readFileSync('notesdata.json')
// const notesJson = notesBuffer.toString()
// const data = JSON.parse(notesJson)
// console.log(data.name)

// data.name = 'soniya'
// data.age = 30
// const notesString = JSON.stringify(data)
// fs.writeFileSync('notesdata.json', notesString)

// const getdata = function() {
//     return data
// }

const addNote = (title, body) => {
    const notes = getNotes()
    // const duplicates = notes.filter(n => n.title === title)
    const duplicateNote = notes.find(n => n.title === title)
    // if (duplicates.length === 0 )   {
    if (!duplicateNote)   {
        notes.push({
                id: notes[notes.length-1].id + 1,
                title: title,
                body: body
            })
        saveNote(notes)
        console.log(chalk.green.inverse('New note added'))
    }else {
        console.log(chalk.green.inverse('Note already exists with title ' + title))
    }
}

const removeNote = (title) => {
    const notes = getNotes()
    
    // const notesToKeep = notes.filter(function(n) {
    //     return n.title !== title
    // })
    const notesToKeep = notes.filter(n => n.title !== title)
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse("Note not found: " + title))
        return false
    } else {
        saveNote(notesToKeep)
        console.log(chalk.green.inverse("Note removed"))
        return true
    }
}

const getNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notesdata.json')
        // debugger
        const notesJson = notesBuffer.toString()
        return JSON.parse(notesJson)
    }
    catch(err) {
        return [];
    }
}

const getNoteByTitle = (title) => {
    const allNotes = getNotes()
    const note = allNotes.find(note => note.title === title)
    if (!note) console.log(chalk.red("Note not found"))
    else console.log(chalk.blue(note.title) + " " + chalk.cyan.inverse(note.body))
}

const saveNote =  (notes) => {
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('notesdata.json', datajson)
}

const removeAllNotes = () => {
    saveNote("")
    console.log(chalk.green.inverse("All notes removed"))
}

const listNotes = () => {
    const allNotes = getNotes()
    allNotes.forEach(note => {
        console.log(" " + chalk.red(note.id) + "-  " + chalk.green.inverse(note.title))
        console.log("\t" + chalk.blue(note.body))
    })

}

export {addNote, getNotes, removeNote, removeAllNotes, listNotes, getNoteByTitle}