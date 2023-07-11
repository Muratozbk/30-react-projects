import { useRef, useEffect } from 'react'
import FormGroup from '../components/FormGroup'
import Button from '../components/Button'
import { LoginContainer, FormAnimation } from './Form.Style';

export default function AnimatedLoginForm() {
    let email = useRef();
    let password = useRef();

    useEffect(() => {
        email.current.focus()
    })

    let formStyle = {
        width: 350,
        marginTop: '6vh'
    }

    return (
        <LoginContainer>
            <FormAnimation>
            </FormAnimation>
            <form style={formStyle}
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
                    <Button btnClass={'btn-block'} text='Submit' />
                    <small className="text-accent">Don't have a account?</small>
                </div>
            </form>

        </LoginContainer>
    )
}
