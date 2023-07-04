import { useRef, useEffect, useState } from 'react'
import Title from '../components/Title'
import Contact from './Contact'

import ContactsData from './Data.json'

export default function FilterContacts() {
    let inputSearch = useRef()

    useEffect(() => {
        inputSearch.current.focus()
    })

    const [searchContact, setSearchContact] = useState('')

    return (
        <div className='text-center'>
            <Title text={'Filter Contacts App'} />
            <input type="text" placeholder='Search by first name'
                ref={inputSearch}
                onChange={e => setSearchContact(e.target.value)}
                className='mb-2' style={{ padding: '.3rem .5rem' }} />
            <section className='d-flex' style={{
                gap: 15,
                maxWidth: '1600px', margin: 'auto',
                flexWrap: 'wrap'
            }}>

                {
                    ContactsData.filter((contact) => {
                        if (searchContact.trim() === '') {
                            return contact;
                        } else if (contact.first_name.toLowerCase()
                            .includes(searchContact.trim().toLocaleLowerCase())) {
                            return contact;
                        }
                    }).map((contact) => (
                        <Contact contact={contact} key={contact.id} />
                    ))
                }
            </section>
        </div>
    )
}
