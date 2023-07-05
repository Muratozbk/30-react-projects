import { useState } from 'react'
import NewNote from './NewNote'
import Button from '../components/Button'
import { v4 as uuidv4 } from 'uuid'


export default function NotesApp() {
    const [notes, setNotes] = useState([]);

    const addNewNote = (newNote) => {
        const newNotes = [...notes, newNote];
        newNotes.filter((note) => !note.id && (note.id = uuidv4()))
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const cards = [
        'card-info',
        'card-primary',
        'card-danger',
        'card-success',
        'card-warning'
    ]

    const randomizeBg = () => {
        const random = Math.floor(Math.random() * cards.length);
        return cards[random]
    }

    return (
        <div className='container'>
            <Button btnClass={'btn-info'}
                text='+ New note' onClick={addNewNote} />

            <div className="container container-sm d-flex"
                style={{ flexWrap: 'wrap', gap: 25 }}>

                {notes.map((note) => (
                    <NewNote key={note.id} note={note} onClickk={deleteNote}
                        cardBg={randomizeBg()} />
                ))}
            </div>
        </div>
    )
}
