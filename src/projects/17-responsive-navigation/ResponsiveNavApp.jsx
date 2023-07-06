import { useState, useEffect } from 'react'
import NavItem from './NavItem'
import { NavStyle } from './NavStyle';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function ResponsiveNavApp() {
    const [showElement, setShowElement] = useState({
        navbarNav: true,
        hamburgerIcon: false,
        closeIcon: false,
        navOpened: false,
    })

    useEffect(() => {
        window.onresize = () => {
            let windowWidth = window.innerWidth;

            windowWidth > 600 && setShowElement({
                navbarNav: true, hamburgerIcon: false
            });
            windowWidth < 600 && setShowElement({
                navbarNav: false, hamburgerIcon: true
            })
        }
    }, [])

    const openNav = () => {
        setShowElement({
            navbarNav: true,
            hamburgerIcon: false,
            closeIcon: true,
            navOpened: true
        })
    }

    const closeNav = () => {
        setShowElement({
            navbarNav: false,
            hamburgerIcon: true,
            closeIcon: false,
            navOpened: false
        })
    }

    return (
        <NavStyle className={`navbar bg-primary text-light ${showElement.navOpened && 'showNavbar'}`}>
            <div className="navbar-logo ">
                <a href="#" className='navbar-brand text-light'>
                    William VN
                </a>
                {/* open and close icons */}
                {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav} />}
                {showElement.closeIcon && <AiOutlineClose onClick={closeNav} />}

            </div>
            <div className="navbar-collapse">
                {showElement.navbarNav ?
                    <ul className={`navbar-items ${showElement.navOpened && 'showNavbar'}`}>
                        <NavItem text={'Home'} active='active' />
                        <NavItem text={'About'} />
                        <NavItem text={'Contact'} />
                    </ul> : null}
            </div>
        </NavStyle>
    )
}
