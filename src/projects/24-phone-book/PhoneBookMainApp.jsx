import { useState, useEffect } from 'react'
import Title from '../components/Title'
import ContactList from './ContactList'

import { getContacts } from './db'
import SearchFilter from './SearchFilter'

export default function PhoneBookMainApp() {
    let dbContacts = getContacts()
    const [showContacts, setShowContacts] = useState(false)
    const [sortAZ, setSortAZ] = useState(true)
    const [searchContact, setSearchContact] = useState('')

    const handleToggleContacts = () => {
        showContacts ? setShowContacts(false) : setShowContacts(true)
    }

    const toggleSortAZ = () => {
        sortAZ ? setSortAZ(false) : setSortAZ(true)
    }

    return (
        <>
            <Title text={'Phone Book'} />
            <main className="bg-dark text-light"
                style={{ padding: '1rem' }}>

                <SearchFilter toggleContacts={handleToggleContacts}
                    handleToggleSearch={toggleSortAZ}
                    handleSearchContact={setSearchContact} />
                <div style={{
                    height: '600px',
                    overflow: 'auto'
                }}>
                    <h2 className="subtitle text-center">Display Contacts</h2>
                    {showContacts && <ContactList
                        contacts={
                            (sortAZ ? dbContacts.sort((a, b) =>
                                a.first_name.localeCompare(b.first_name))
                                : dbContacts.sort((a, b) =>
                                    b.first_name.localeCompare(a.first_name))
                            ).filter((contact) => {
                                if (searchContact.trim() === '') { return contact }
                                else if (contact.first_name.toLowerCase().includes(searchContact.toLowerCase())) {
                                    return contact
                                }
                            })} />}
                </div>
            </main>

        </>
    )
}
