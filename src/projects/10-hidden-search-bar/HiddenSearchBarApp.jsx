import { useState, useEffect, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function HiddenSearchBarApp() {
    const [uiProps, setUiProps] = useState({
        bg: 'purple',
        shadow: '',
        transitions: 'all .3s ease',
        opacity: 0,
        showSearchIcon: true,
        showSearchBar: false,
        borderBottomColor: '#fff'
    })

    let body = document.body.style;
    let bsSearchStyle = {
        color: '#fff',
        fontSize: 40,
        cursor: 'pointer',
        position: 'absolute',
        top: 20,
        right: 20,
    }

    let inputStyle = {
        margin: '10vh 25vw',
        width: '20vw',
        height: '30px',
        padding: '1rem .3rem',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        borderBottom: `1px solid ${uiProps.borderBottomColor}`,
        fontSize: '1.3rem',
        color: '#eee',
        boxShadow: '0px 55px 60px -15px rgba(0,0,0,0.75)',
        opacity: uiProps.opacity,
        transitions: 'all .3s ease'
    }

    const inputEl = useRef()

    useEffect(() => {
        body.background = uiProps.bg;
        body.boxShadow = uiProps.shadow;
        body.transisiton = uiProps.transitions;
        uiProps.showSearchBar && inputEl.current.focus();
        console.log(uiProps)
    }, [uiProps.shadow], [uiProps.showSearchBar]);

    const showSearch = () => {
        setUiProps({
            opacity: 1,
            showSearchIcon: false,
            showSearchBar: true
        })
    }

    const handleSearchFocus = () => {
        setUiProps({
            shadow: 'inset 0 60vh 30vw 200px rgba(0,0,0,0.8)',
            borderBottomColor: 'green',
        })
    }

    const handleSearchBlur = () => {
        setUiProps({
            shadow: 'none',
            opacity: 0,
            borderBottomColor: '#fff',
            showSearchIcon: true,
        })
    }

    return (
        <div className='container' style={{ height: '100vh' }}>
            {uiProps.showSearchIcon ?
                <BsSearch style={bsSearchStyle}
                    onClick={showSearch} /> :
                <input type="text" placeholder='Search'
                    style={inputStyle}
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                    ref={inputEl}
                />}
        </div>
    )
}
