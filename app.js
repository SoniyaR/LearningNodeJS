// import validator from 'validator'
import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import {addNote, getNotes, removeNote, removeAllNotes, listNotes, getNoteByTitle} from './notes.js';
// const fsMod = require('fs')
// const addfun = require('./utils')

// fsMod.writeFileSync('notes.txt', 'file create by app js. Name is khan. ')
// fsMod.appendFileSync('notes.txt', '\nfile create by soniya')
// console.log(name)
// const sum = addfun(4,2)
// console.log(sum)

// const notes = require('./notes')
// console.log(notes())

// const text = "Awesome!"
// console.log(chalk.green.inverse.bold(validator.isURL('sds.com')))
// console.log(chalk.underline.blue("this is blue and underlined"))
// console.log(chalk.bgRed(text.toUpperCase()))

// const command = process.argv[2]
// console.log(process.argv)
// if (command === 'add') {
//     console.log('adding note')
// } else if (command === 'remove') {
//     console.log('removing note')
// }

// console.log(yargs(hideBin(process.argv)).argv)
// console.log('\n---------')

yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: false,
            type: 'string'
        },
        description: {
            describe: 'note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log(chalk.green('adding new note :', argv.title, argv.description))
        addNote(argv.title, argv.description)
    }
}).parse()

yargs(hideBin(process.argv)).command({
    command: 'remove',
    describe: "Remove a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log(chalk.red('Request received for removing a note: ' + argv.title))
        const response = removeNote(argv.title) //invoke
        // console.log(response)
    }
}).parse()

yargs(hideBin(process.argv)).command({
    command: 'read',
    describe: "Read all notes",
    handler() {
        console.log(getNotes())
    }
}).parse()

yargs(hideBin(process.argv)).command({
    command: 'readNote',
    describe: "Read notes by title",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        getNoteByTitle(argv.title)
    }
}).parse()

yargs(hideBin(process.argv)).command({
    command: 'removeall',
    describe: "Remove all notes",
    handler() {
        // console.log(chalk.green('reading a note'))
        removeAllNotes()
    }
}).parse()

yargs(hideBin(process.argv)).command({
    command: 'listNotes',
    describe: "List all notes",
    handler() {
        // console.log(chalk.green('reading a note'))
        listNotes()
    }
}).parse()

// yargs(hideBin(process.argv)).command({
//     command: 'list',
//     describe: "List all notes",
//     handler: function () {
//         console.log(chalk.green('listing all notes'))
//     }
// }).parse()


