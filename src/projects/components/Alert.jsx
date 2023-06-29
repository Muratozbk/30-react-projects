import { useState, useEffect } from 'react';
import Button from './Button'

export default function Alert({ type,
    delayTime = 3000, message, delay }) {
    const [showAlert, setShowAlert] = useState(true)

    const closeAlert = (e) => {
        e.target.parentElement.parentElement.
            classList.add('fadeAlert');
        setTimeout(() => { setShowAlert(false) }, 450)
    }

    useEffect(() => {
        let timer;
        if (delay) {
            timer = setTimeout(() => {
                setShowAlert(false)
            }, delayTime)
        }
        return () => clearTimeout(timer);
    }, [delay])



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
