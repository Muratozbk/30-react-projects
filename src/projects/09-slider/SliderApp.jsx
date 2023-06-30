import { useState } from 'react'
import SliderComp from './SliderComp';
import Title from '../components/Title'

export default function SliderApp() {
    const [slideValue, setSlideValue] = useState(0)

    const handleSliderChange = e => {
        setSlideValue(e.target.value)
    }

    let bgColor;
    let textColor;

    if (slideValue <= 25) {
        bgColor = 'red';
        textColor = 'blue'
    }
    if (slideValue > 25 && slideValue <= 50) {
        bgColor = 'blue';
    }
    if (slideValue > 51 && slideValue <= 75) {
        bgColor = 'green';
        textColor = 'white'
    }
    if (slideValue > 75) {
        bgColor = 'orange';
        textColor = 'white'
    }
    if (slideValue == 100) {
        bgColor = 'red';
    }

    return (
        <div className='container text-center'>
            <Title text={'Slide to Grow'} />
            <SliderComp setValue={slideValue}
                handleInput={handleSliderChange}
                bgColor={bgColor} textColor={textColor} />
        </div>
    )
}
