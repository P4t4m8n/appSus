// import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { asyncStorage } from '../../../services/async-storage.service.js'

const NOTES_KEY = 'noteDB'
_createnotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getNewNote,


}

console.log(_createnotes())

function query(filterBy) {
    return asyncStorage.query(NOTES_KEY)
        .then(notes => {
            if (filterBy !== '') notes = notes.filter(note => note.type === filterBy)
            var pins = notes.filter((note) => note.isPinned)
            var noPin = notes.filter((note) => !note.isPinned)
            notes = pins.concat(noPin)
            return notes
        })
}



function get(noteId) {
    return asyncStorage.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return asyncStorage.remove(NOTES_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return asyncStorage.put(NOTES_KEY, note)
    } else {
        console.log("note:", note)
        return asyncStorage.post(NOTES_KEY, note)
    }
}

function getNewNote(type = 'note-txt', isPinned = false, isEdit = false, style = { bgc: '#00d' }, info = { txt: 'Im a new text note', todos: [{ txt: 'Im a new Todo' }], url: '' }) {
    return { id: '', createdAt: new Date(), isEdit, type, isPinned, style, info }
}

function getDefaultFilter() {
    return ''
}

function _createnotes() {
    let notes = storageService.loadFromStorage(NOTES_KEY)

    if (!notes || !notes.length) {
        notes = [
            {
                id: 'n109',
                createdAt: 1112222,
                type: 'note-txt',
                isPinned: false,
                isEdit: false,
                style: {
                    backgroundColor: '#008080'
                },
                info: {
                    txt: 'Note to Note',
                    url: '',
                    todos: []
                }
            },
            {
                id: 'n110',
                createdAt: 1112222,
                type: 'note-img',
                isPinned: false,
                isEdit: false,
                info: {
                    url: '../../../assets/img/audi.jpg',
                    txt: 'Serene Beach Sunset',
                    todos: []
                },
                style: {
                    backgroundColor: '#008080'
                }
            },
            {
                id: 'n111',
                createdAt: 1112222,
                type: 'note-todos',
                isPinned: false,
                isEdit: false,
                info: {
                    txt: 'Make notes',
                    url: '',
                    todos: [
                        { txt: 'Copy everything from someone else', doneAt: 187111115 },
                        { txt: 'make it look like yours', doneAt: null },
                        { txt: 'Fail', doneAt: null },
                        { txt: 'Start again', doneAt: null },
                    ]
                },
                style: {
                    backgroundColor: '#008080'
                }
            },
            {
                id: 'n112',
                createdAt: 1112222,
                type: 'note-video',
                isPinned: false,
                isEdit: false,
                info: {
                    url: 'https://www.youtube.com/embed/aXOChLn5ZdQ?si=BvuDvzMouu9Kp7JR',
                    txt: 'JavaScript for the Haters',
                    todos: []
                },
                style: {
                    backgroundColor: '#008481'
                }
            },
            {
                id: 'n113',
                createdAt: 1112222,
                type: 'note-txt',
                isPinned: false,
                isEdit: false,
                style: {
                    backgroundColor: '#800080'
                },
                info: {
                    txt: 'Mindfulness meditation techniques',
                    url: '',
                    todos: []
                }
            },
            {
                id: 'n114',
                createdAt: 1112222,
                type: 'note-img',
                isPinned: false,
                isEdit: false,
                info: {
                    url: '../../../assets/img/fiat.jpg',
                    txt: 'Majestic Mountain Range',
                    todos: []
                },
                style: {
                    backgroundColor: '#800080'
                }
            },
            {
                id: 'n115',
                createdAt: 1112222,
                type: 'note-todos',
                isPinned: true,
                isEdit: false,
                info: {
                    txt: 'Work-related tasks',
                    url: '',
                    todos: [
                        { txt: 'Complete project report', doneAt: null },
                        { txt: 'Schedule team meeting', doneAt: 187111116 }
                    ]
                },
                style: {
                    backgroundColor: '#800080'
                }
            },
            {
                id: 'n116',
                createdAt: 1112222,
                type: 'note-video',
                isPinned: false,
                isEdit: false,
                info: {
                    url: 'https://www.youtube.com/embed/zR9sY83Nqd8?si=33Mu4cW4PMHDtqMv',
                    txt: 'Python Programming Basics',
                    todos: []
                },
                style: {
                    backgroundColor: '#800080'
                }
            },
            {
                id: 'n117',
                createdAt: 1112222,
                type: 'note-txt',
                isPinned: false,
                isEdit: false,
                style: {
                    backgroundColor: '#ff4500'
                },
                info: {
                    txt: 'Travel bucket list',
                    url: '',
                    todos: []
                }
            },
            {
                id: 'n118',
                createdAt: 1112222,
                type: 'note-img',
                isPinned: false,
                isEdit: false,
                info: {
                    url: '../../../assets/img/honda.jpg',
                    txt: 'City Skyline at Night',
                    todos: []
                },
                style: {
                    backgroundColor: '#ff4500'
                }
            },
            {
                id: 'n119',
                createdAt: 1112222,
                type: 'note-todos',
                isPinned: false,
                isEdit: false,
                info: {
                    txt: 'Fitness goals',
                    url: '',
                    todos: [
                        { txt: 'Run 5 miles', doneAt: 187111118 },
                        { txt: 'Try a new workout class', doneAt: null }
                    ]
                },
                style: {
                    backgroundColor: '#ff4500'
                }
            },
            {
                id: 'n120',
                createdAt: 1112222,
                type: 'note-video',
                isPinned: false,
                isEdit: false,
                info: {
                    url: 'https://www.youtube.com/embed/HyWYpM_S-2c?si=C2oF3AHUHnnJ5Tit',
                    txt: 'React for the Haters in 100 Seconds',
                    todos: []
                },
                style: {
                    backgroundColor: '#ff4500'
                }
            }


        ]

    }
    storageService.saveToStorage(NOTES_KEY, notes)
    return notes
}
