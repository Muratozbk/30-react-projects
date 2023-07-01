import { useState, useEffect } from 'react'
import Popup from '../components/Popup.component'
import Button from '../components/Button'
import Title from '../components/Title'

export default function PopupApp() {
    const [trigger, setTrigger] = useState(false)
    const [timeTrigger, setTimeTrigger] = useState(false)

    const triggerPopup = () => {
        setTrigger(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setTimeTrigger(true);
        }, 3000)
    })

    return (
        <div className='text-center'>
            <Title text={'Click for popup, or weight 3 seconds'} />
            <Button btnClass={'btn-primary'}
                onClick={triggerPopup} />
            {(trigger ||
                timeTrigger) && <Popup type={'alert-info'}
                    title={'Triggered Popup'}
                    text={'This popup was triggered by the button'}
                    handleClose={(setTrigger)} />}
        </div>
    )
}
