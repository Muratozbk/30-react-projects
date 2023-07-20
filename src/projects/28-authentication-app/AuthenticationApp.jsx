import { useState } from 'react'
import Title from '../components/Title'
import FormGroup from '../components/FormGroup'

export default function AuthenticationApp() {
    const [ui, setUi] = useState({
        wrapper: true,
        title: "Authenticate"
    })

    return (
        <div className='container' style={{ width: 300 }}>
            <Title text={ui.title} />

            {ui.wrapper && (
                <>
                    <FormGroup inputType={"text"}
                        labelText={"User name"}
                        placeholder={"Enter your name"}
                        values="" />
                    <FormGroup inputType={"password"}
                        labelText={"Password"}
                        placeholder={"Enter your password"}
                        values="" />
                </>)}
        </div>
    )
}
