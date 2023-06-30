import { useState, useEffect } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from 'react-icons/ai'
import LockScreenImg from './img/moon.jpg'
import HomeScreenImg from './img/home.jpg'

export default function SlideToUnlock() {
    const [uiProps, setUiProps] = useState({
        uiText: 'Unlock screen',
        uiColor: '#eee',
        uiBg: `url(${LockScreenImg}) center/cover`
    })
    const [showLock, setShowLock] = useState(true)
    const [lockSliderValue, setLockSliderValue] = useState(0)

    const handleSliderInput = (e) => {
        setLockSliderValue(e.target.value)
        // setShowLock(false)
    }

    const resetSlider = () => {
        setLockSliderValue(0);
    };

    useEffect(() => {
        if (lockSliderValue > 99) {
            setShowLock(false)
            setUiProps(prevState => ({
                ...prevState,
                uiBg: `url(${HomeScreenImg}) center/cover`
            }))
            resetSlider()
        }

    }, [lockSliderValue])

    const handleClick = () => {
        setLockSliderValue(0)
        setUiProps(prevState => ({
            ...prevState,
            uiBg: `url(${LockScreenImg}) center/cover`
        }))
        setShowLock(true)
    }

    return (
        <div style={{
            height: '80vh', marginTop: '9vh', width: '340px',
            border: '4px solid #000', borderRadius: '20px',
            background: uiProps.uiBg,
        }}
            className="container text-center d-flex flex-column">
            <h1 className='title'
                style={{ color: uiProps.uiColor }}>{uiProps.uiText}</h1>
            {showLock ?
                <LockSlider handleInput={handleSliderInput}
                    showLock={showLock} value={lockSliderValue} width={'264px'} />
                : <AiFillUnlock onClick={handleClick} className='unlockIcon' />}


        </div>
    )
}
