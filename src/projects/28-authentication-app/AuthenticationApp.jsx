import { useState } from 'react'
import Title from '../components/Title'
import FormGroup from '../components/FormGroup'
import { Wrapper } from './components/Wrapper.style'
import Auth from './components/Auth'

export default function AuthenticationApp() {
    const [ui, setUi] = useState({
        wrapper: true,
        title: "Authenticate"
    })

    const [animateDenied, setAnimateDenied] = useState(false)

    return (
        <div className='container' style={{ width: 300 }}>
            <Title text={ui.title} />

            {ui.wrapper && (
                <Wrapper className={animateDenied && "active"}>
                    <FormGroup inputType={"text"}
                        labelText={"User name"}
                        placeholder={"Enter your name"}
                        values="" />
                    <FormGroup inputType={"password"}
                        labelText={"Password"}
                        placeholder={"Enter your password"}
                        values="" />
                </Wrapper>)}
            <Auth />
        </div>
    )
}
