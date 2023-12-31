import { useState, useRef, useEffect } from 'react'
import Title from '../components/Title'
import FormGroup from '../components/FormGroup'
import { Wrapper } from './components/Wrapper.style'
import Auth from './components/Auth';
import { AuthContext } from './context/auth.context';

export default function AuthenticationApp() {
    const inputName = useRef();
    useEffect(() => { inputName.current.focus() }, [inputName])

    const [ui, setUi] = useState({
        wrapper: true,
        title: "Authenticate"
    })

    const [animateDenied, setAnimateDenied] = useState(false)

    const [userAuth, setUserAuth] = useState({
        name: "",
        password: ""
    })

    const handleChangeName = (e) => {
        setUserAuth({ ...userAuth, name: e.target.value })
    }
    const handleChangePassword = (e) => {
        setUserAuth({ ...userAuth, password: e.target.value })
    }

    const [authStatus, setAuthStatus] = useState(null);

    const login = () => {
        if ((userAuth.name === "Norbert" && userAuth.password === "1234") || (userAuth.name === "Murat" && userAuth.password === "1234")) {
            setAuthStatus(true);
            clearInputs()
            authenticate()
        } else {
            setAuthStatus(false);
            setAnimateDenied(true);
            setTimeout(() => {
                setAnimateDenied(false)
            }, 600)
        }
    }

    function clearInputs() {
        setUserAuth({
            name: "",
            password: ""
        })
    }

    function authenticate() {
        setUi({
            wrapper: false,
            title: `Welcome ${userAuth.name}`
        })
    }

    const logout = () => {
        window.location.reload(true)
    }

    return (
        <form className='container'
            style={{ width: 300 }}
            onSubmit={e =>
                e.preventDefault()}>
            <Title text={ui.title} />
            <AuthContext.Provider value={{
                status: authStatus,
                login: login, logout: logout
            }}>
                {ui.wrapper && (
                    <Wrapper className={animateDenied && "active"}
                    >
                        <FormGroup inputType={"text"}
                            labelText={"User name"}
                            placeholder={"Enter your name"}
                            values={userAuth.name}
                            reference={inputName}
                            onChange={handleChangeName} />
                        <FormGroup inputType={"password"}
                            labelText={"Password"}
                            placeholder={"Enter your password"}
                            values={userAuth.password}
                            onChange={handleChangePassword}
                        />
                    </Wrapper>)}
                <Auth />
            </AuthContext.Provider>
        </form>
    )
}
