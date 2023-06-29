import Title from '../components/Title'
import Button from '../components/Button'
import { useContext } from 'react'
import { ThemeContext } from './context/theme-context'

export default function Blog() {
    const { theme, changeTheme } = useContext(ThemeContext)

    return (
        <div className='container'
            style={{ padding: '1rem' }}>
            <Title text={`Blog with ${theme} Theme`} />
            <span style={{
                position: 'absolute',
                top: 10, right: 10
            }}>
                <Button text={theme === 'dark' ? 'Light' : 'Dark'}
                    btnClass={`${theme === 'dark' && 'btn-light'}`} onClick={changeTheme} />
            </span>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, eos error quos dolores magnam rerum reiciendis perspiciatis eveniet odit non?
            </p>
        </div>
    )
}
