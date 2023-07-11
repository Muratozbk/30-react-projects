import { useRef, useEffect, useState } from 'react'
import FormGroup from '../components/FormGroup'
import Button from '../components/Button'
import { LoginContainer, FormAnimation } from './Form.Style';

export default function AnimatedLoginForm() {
    let email = useRef();
    let password = useRef();

    useEffect(() => {
        email.current.focus()
    })

    const [rotate, setRotate] = useState({
        animation: '',
        borderColor: '',
        background: '',
    })

    let formStyle = {
        width: 350,
        marginTop: '6 vh'
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email.current.value !== '' &&
            password.current.value !== '') {
            setRotate({
                animation: 'animate',
                borderColor: 'green',
                background: 'green'
            });
        } else {
            setRotate({ animation: '', borderColor: 'red' })
        }
    }
    return (
        <LoginContainer className='rotate.animation'>
            <FormAnimation
                background={rotate.background}
                borderColor={rotate.borderColor}
                className='rotate.animation'>
            </FormAnimation>
            <form style={formStyle}
                onSubmit={handleSubmit}
                className='card m-auto'>
                <h2 className="subtitle mt-2 mb 2">Login</h2>
                <FormGroup
                    labelText={'Email'}
                    inputType={'email'}
                    reference={email} />
                <FormGroup
                    labelText={'Password'}
                    inputType={'password'}
                    reference={password} />

                <div className="form-group">
                    <Button btnClass={'btn-block'}
                        text='Submit' />
                    <small className="text-accent">Don't have a account?</small>
                </div>
            </form>

        </LoginContainer>
    )
}
