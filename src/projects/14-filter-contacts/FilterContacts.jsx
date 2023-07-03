import { useRef, useEffect, useState } from 'react'
import Title from '../components/Title'
import Contact from './Contact'

import ContactsData from './Data.json'

export default function FilterContacts() {
    let inputSearch = useRef()

    useEffect(() => {
        inputSearch.current.focus()
    })

    return (
        <div className='text-center'>
            <Title text={'Filter Contacts App'} />
            <input type="text" placeholder='Search by first name'
                ref={inputSearch}
                className='mb-2' style={{ padding: '.3rem .5rem' }} />
            <section className='d-flex' style={{
                gap: 15,
                maxWidth: 1600, margin: 'auto'
            }}>

                {
                    ContactsData.map((contact) => (
                        <Contact contact={contact} key={contact.id} />
                    ))
                }
            </section>
        </div>
    )
}
