import { useState, useEffect } from 'react';
import Button from './Button'

export default function Alert({ type, message }) {
    const [showAlert, setShowAlert] = useState(true)

    const closeAlert = (e) => {
        e.target.parentElement.parentElement.
            classList.add('fadeAlert');

        setTimeout(() => { setShowAlert(false) }, 450)
    }

    return (showAlert &&
        <div className={`alert alert-${type}`} >
            <div className="alert-close">
                <span className="mr-1">{message} </span>
                <Button btnClass={'btn-close'}
                    text='X'
                    onClick={closeAlert} />
            </div>
        </div>)

}
