import { useState } from 'react'
import Button from '../components/Button'
import FormGroup from '../components/FormGroup';
import AnimatedText from 'react-animated-text-content'

export default function TextAnimationApp() {
    const [inputValue, setInputValue] = useState('')
    const [animatedText, setAnimatedText] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClear = () => {
        setAnimatedText(inputValue);
        setInputValue(() => '')
    }

    return (
        <div className='container text-center'>
            <form action="" className="container d-flex mt-4 mb-2"
                onSubmit={(e) => e.preventDefault()}>
                <FormGroup inputType={'text'}
                    onChange={handleInputChange}
                    placeholder={'Your Text'} values={inputValue}
                    labelText={'Type in your text to be animated'} />
                <Button text='Clear' btnClass={'btn-large btn-danger mt-3'}
                    onClick={handleClear} />
            </form >
            {animatedText && (
                <AnimatedText type='char'
                    interval={0.04}
                    duration={1}
                    animation={{
                        y: '-150px',
                        x: '-150px',
                        ease: 'linear'
                    }}
                    className='title'>
                    {animatedText}
                </AnimatedText>)}

        </div>
    )
}
