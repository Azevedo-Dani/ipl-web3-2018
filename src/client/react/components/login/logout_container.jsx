import React from 'react'
import { Redirect } from 'react-router-dom';
class LogoutContainer extends React.Component {
    constructor(props) {
        super(props)
        const jwt = localStorage.getItem('JWT')
        this.state = {
            redirect: true
        }
        if (jwt) { // logout
            this.removeJWT()
        }
    }

    removeJWT() {
        localStorage.removeItem('JWT')
    }

    render() {
        return (
            <React.Fragment>
               <Redirect to='/login'/>
            </React.Fragment>
        )
    }
}

export default LogoutContainer