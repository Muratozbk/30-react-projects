import React from 'react'
import Button from '../components/Button'
import { FaAddressBook, FaArrowsAltV } from 'react-icons/fa'

export default function SearchFilter({ handleToggleSearch, toggleContacts }) {
    return (
        <section className='text-center'>

            <Button btnClass={'btn-dark'}
                text='' icon={<FaAddressBook />}
                onClick={toggleContacts} />
            <input type='text' placeholder='Search by first name'
                style={{
                    margin: '0 1rem 1rem 1rem',
                    padding: '.35rem .5rem'
                }} />
            <Button btnClass={'btn-dark'}
                text='' icon={<FaArrowsAltV
                    onClick={handleToggleSearch} />} />
        </section>
    )
}
