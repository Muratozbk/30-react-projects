import { useState, useRef, useEffect } from 'react'
import Title from '../components/Title';
import Button from '../components/Button';
import Alert from '../components/Alert'

export default function RegistrationFormApp() {
    let inputName = useRef();
    let inputEmail = useRef();
    let inputPassword = useRef();

    useEffect(() => {
        inputName.current.focus()
    }, [])

    const [values, setValues] = useState({
        user_name: '',
        email: '',
        password: ''
    })

    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.user_name) {
            inputName.current.focus()
        } else if (!values.email) {
            inputEmail.current.focus()
        } else if (!values.password) {
            inputPassword.current.focus()
        }
        if (values.user_name && values.email && values.password) {
            setValid(true)
        }
        setSubmit(true)
    }

    const [valid, setValid] = useState(false)

    const handleNameChange = (e) => {
        setValues({ ...values, user_name: e.target.value })
    }
    const handleEmailChange = (e) => {
        setValues({ ...values, email: e.target.value })
    }
    const handlePasswordChange = (e) => {
        setValues({ ...values, password: e.target.value })
    }

    return (
        <div className='m-auto'>
            {/* Alert and Welcome */}

            {submit && valid ? (
                <>
                    <Alert type={'success'} message={'Registration was succesfull!'}
                        delay={true} delayTime={5000} />
                    <Title text={`Welcome ${values.user_name}`} />
                </>
            ) : (
                < div className="shadow-sm container m-auto mt-4"
                    style={{ padding: '2rem', border: '1px solid #55a' }}>
                    <Title text={'Registration'} />

                    <form onSubmit={handleSubmit} >
                        <div className="form-group mb-1 ">
                            <input ref={inputName} type="text"
                                placeholder=' Enter Your Name'
                                value={values.user_name}
                                onChange={handleNameChange} />

                            {submit && !values.user_name ? (<label className="text-danger">Please enter your name</label>)
                                : null}
                        </div>
                        <div className="form-group mb-1">
                            <input type="email" ref={inputEmail} placeholder=' Enter Your Email' onChange={handleEmailChange}
                                value={values.email} />
                            {submit && !values.email && <label className="text-danger">Please enter your email</label>}
                        </div>
                        <div className="form-group mb-1">
                            <input type="password" ref={inputPassword}
                                onChange={handlePasswordChange}
                                placeholder=' Enter Your Password' value={values.password} />
                            {submit && !values.password && <label className="text-danger">Please enter your password</label>}
                        </div>

                        <Button text='Register' btnClass={'btn-primary'} />
                    </form>
                </div >
            )
            }
        </div >
    )
}
