import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
const SomeComponent = withRouter(AuthenticatedRouter);

const AuthenticatedRouter = ({
    authenticated
}) => {
    const redirectToLogin = !authenticated && this.props.location !== '/login'
        return (
            <React.Fragment>
                {redirectToLogin && <Redirect to='/login'/>}
                {!redirectToLogin && <component/>}
            </React.Fragment>
        )
}

export default SomeComponent