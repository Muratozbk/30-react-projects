import { useState } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from 'react-icons/ai'
import LockSreenImg from './img/moon.jpg'
import HomeScreenImg from './img/home.jpg'

export default function SlideToUnlock() {
    const [uiProps, setUiProps] = useState({
        uiText: 'Unlock screen',
        uiColor: '#eee',
        uiBg: `url(${LockSreenImg}) center/cover`
    })
    const [showLock, setShowLock] = useState(true)
    return (
        <div style={{
            height: '80vh', marginTop: '9vh', width: '340px',
            border: '4px solid #000', borderRadius: '20px',
            background: uiProps.uiBg,
            backgroundSize: 'cover'
        }}
            className="container text-center d-flex flex-column">
            <h1 className='title'
                style={{ color: uiProps.uiColor }}>{uiProps.uiText}</h1>
            {showLock ? <LockSlider width={'264px'} />
                : <AiFillUnlock className='unlockIcon' />}


        </div>
    )
}
