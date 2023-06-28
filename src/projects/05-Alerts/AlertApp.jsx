import React from 'react'
import Alert from '../components/Alert'

export default function AlertApp() {
    document.querySelector('body').style.background = '#ccc'

    return (
        <div className='container mx-auto'>

            <Alert type={'success'}
                message={'Succesful login alert'} />
        </div>
    )
}
