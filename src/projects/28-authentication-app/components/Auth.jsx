import React, { useContext } from 'react'
import Button from "../../components/Button"
import Alert from "../../components/Alert"
import { AuthContext } from '../context/auth.context'

export default function Auth() {

    const auth = useContext(AuthContext)
    console.log(auth)
    return (
        <div>
            {auth.status === null ? ("") : auth.status === true ? (
                <Alert type={"success"} message={"Success"} />
            ) : null}
            {auth.status === null ?
                (<Button btnClass={"btn-success btn-block"}
                    text='Login' />) :
                auth.status === true ?
                    (<Button btnClass={"btn-danger btn-block"}
                        text='Log out' />) :
                    (<Button btnClass={"btn-primary btn-block"}
                        text='Try again' />)}
        </div>
    )
}
