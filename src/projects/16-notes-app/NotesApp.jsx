import { useState } from 'react'
import NewNote from './NewNote'
import Button from '../components/Button'

export default function NotesApp() {
    return (
        <div className='container'>
            <Button btnClass={'btn-info'} text='+ New note' />

            <div className="container d-flex"
                style={{ flexWrap: 'wrap', gap: 25 }}>

                <NewNote />
            </div>
        </div>
    )
}
