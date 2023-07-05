import { useState, useEffect } from 'react'
import { NoteStyle, Icons, DeleteIcon } from './NotesStyle'
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md'

export default function NewNote({ cardBg, note, onClick, text }) {
    const [newCardBg, setNewCardbg] = useState();

    useEffect(() => {
        !newCardBg && setNewCardbg(cardBg)
    }, [newCardBg])

    return (
        <NoteStyle className={`card ${newCardBg}`}>

            <div className="card-header text-right">
                <Icons>
                    <MdOutlineNoteAlt />
                    <DeleteIcon>
                        <MdDeleteForever onClick={() => onClick(note.id)} />
                    </DeleteIcon>
                </Icons>
            </div>
            <div className="card-body">
                <textarea style={{ border: 'none', outline: 'none' }}>
                    {text}
                </textarea>
            </div>
        </NoteStyle>
    )
}
