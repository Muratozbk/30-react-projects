import { useState, useEffect } from 'react'
import Title from '../components/Title'
import ContactList from './ContactList'

export default function PhoneBookMainApp() {
    const [showContacts, setShowContacts] = useState(true)

    return (
        <>
            <Title text={'Phone Book'} />
            <main className="bg-dark text-light"
                style={{ padding: '1rem' }}>
                {/* <SearchFilter/> */}
                <div style={{
                    height: '600px',
                    overflow: 'auto'
                }}>
                    <h2 className="subtitle text-center">Display Contacts</h2>
                    {showContacts && <ContactList />}
                </div>
            </main>

        </>
    )
}
