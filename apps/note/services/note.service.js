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

function query() {
    return asyncStorage.query(NOTES_KEY)
        .then(notes => {
            // if (filterBy.name) {
            //     const regex = new RegExp(filterBy.name, 'i')
            //     notes = notes.filter(note => regex.test(note.txt))
            // }
            // if (filterBy.price) {
            //     notes = notes.filter(note => note.listPrice.amount >= filterBy.price)
            // }
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
    return { type: '', date: '' }
}

function _createnotes() {
    let notes = storageService.loadFromStorage(NOTES_KEY)

    if (!notes || !notes.length) {
        notes = [
            {
                id: 'n101',
                createdAt: 1112222,
                type: 'note-txt',
                isPinned: true,
                style: {
                    backgroundColor: '#0000dd'
                },
                info: {
                    txt: 'Fullstack Me Baby!'
                }
            },
            {
                id: 'n102',
                type: 'note-img',
                isPinned: false,
                info: {
                    url: '../../../assets/img/audi.jpg',
                    txt: 'Bobi and Me'
                },
                style: {
                    backgroundColor: '#0000dd'
                }
            },
            {
                id: 'n103',
                type: 'note-todos',
                isPinned: false,
                info: {
                    txt: 'Get my stuff together',
                    todos: [
                        { txt: 'Driving license', doneAt: null },
                        { txt: 'Coding power', doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor: '#0000dd'
                }
            },

            {
                id: 'n104',
                type: 'note-video',
                isPinned: false,
                info: {
                    url: "https://www.youtube.com/embed/HyWYpM_S-2c?si=33Mu4cW4PMHDtqMv",
                    txt: 'React for haters',
                },
                style: {
                    backgroundColor: '#0000dd'
                }
            },

            {
                id: 'n105',
                type: 'note-txt',
                isPinned: false,
                style: {
                    backgroundColor: '#00ff00'
                },
                info: {
                    txt: 'Learning JavaScript Promises'
                }
            },
            {
                id: 'n106',
                type: 'note-img',
                isPinned: true,
                info: {
                    url: '../../../assets/img/honda.jpg',
                    txt: 'Serene Nature'
                },
                style: {
                    backgroundColor: '#ff0000'
                }
            },
            {
                id: 'n107',
                type: 'note-todos',
                isPinned: true,
                info: {
                    txt: 'Home Improvement',
                    todos: [
                        { txt: 'Paint the living room', doneAt: 187222222 },
                        { txt: 'Install new shelves', doneAt: 187333333 },
                        { txt: 'Fix the leaky faucet', doneAt: null }
                    ]
                },
                style: {
                    backgroundColor: '#ffcc00'
                }
            },
            {
                id: 'n108',
                type: 'note-video',
                isPinned: false,
                info: {
                    url: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=jhfiuhweifhwei',
                    txt: 'Introduction to Machine Learning'
                },
                style: {
                    backgroundColor: '#9932CC'
                }
            },

            {
                id: 'n109',
                type: 'note-txt',
                isPinned: true,
                style: {
                    backgroundColor: '#ff9900'
                },
                info: {
                    txt: 'Mastering CSS Grid Layout'
                }
            },
            {
                id: 'n110',
                type: 'note-img',
                isPinned: false,
                info: {
                    url: '../../../assets/img/fiat.jpg',
                    txt: 'Gorgeous Sunset'
                },
                style: {
                    backgroundColor: '#008080'
                }
            },
            {
                id: 'n111',
                type: 'note-todos',
                isPinned: true,
                info: {
                    txt: 'Fitness Goals',
                    todos: [
                        { txt: 'Run 5 miles', doneAt: 187444444 },
                        { txt: 'Complete 50 push-ups', doneAt: 187555555 },
                        { txt: 'Yoga session', doneAt: null }
                    ]
                },
                style: {
                    backgroundColor: '#800080'
                }
            },
            {
                id: 'n112',
                type: 'note-video',
                isPinned: false,
                info: {
                    url: 'https://www.youtube.com/embed/1I-3vJSC-Vo?si=dsbfjbsjkdb',
                    txt: 'Introduction to Cybersecurity'
                },
                style: {
                    backgroundColor: '#008000'
                }
            },

            {
                id: 'n113',
                type: 'note-txt',
                isPinned: false,
                style: {
                    backgroundColor: '#ff6666'
                },
                info: {
                    txt: 'Exploring Node.js Development'
                }
            },
            {
                id: 'n114',
                type: 'note-img',
                isPinned: true,
                info: {
                    url: '../../../assets/img/suzuki.jpg',
                    txt: 'Majestic Mountains'
                },
                style: {
                    backgroundColor: '#4B0082'
                }
            },
            {
                id: 'n115',
                type: 'note-todos',
                isPinned: false,
                info: {
                    txt: 'Vacation Planning',
                    todos: [
                        { txt: 'Book flights', doneAt: 187666666 },
                        { txt: 'Reserve accommodation', doneAt: 187777777 },
                        { txt: 'Create itinerary', doneAt: null }
                    ]
                },
                style: {
                    backgroundColor: '#ffa500'
                }
            },
            {
                id: 'n116',
                type: 'note-video',
                isPinned: true,
                info: {
                    url: 'https://www.youtube.com/embed/zuaZXRYqRn4?si=wiqweiqwe',
                    txt: 'Artificial Intelligence Explained'
                },
                style: {
                    backgroundColor: '#4682B4'
                }
            },

        ];

    }
    storageService.saveToStorage(NOTES_KEY, notes)
}
