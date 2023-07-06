import React from 'react'
import Button from '../components/Button'
import FormGroup from '../components/FormGroup'


export default function TextAnimationApp() {
    return (
        <div className='container text-center'>
            <form action="" className="container d-flex mt-4 mb-2"
                onSubmit={(e) => e.preventDefault()}>
                <FormGroup inputType={'text'}
                    placeholder={'Your Text'} values={''}
                    labelText={'Type in your text to be animated'} />
                <Button text='Clear' btnClass={'btn-large btn-danger mt-3'} />
            </form >

            TextAnimationApp
        </div>
    )
}
