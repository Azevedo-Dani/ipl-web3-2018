import React from 'react'
import {Alert} from 'react-bootstrap'
const AlertMessageComponent = ({
    show, message
}) => {
    return (<Alert className ={show ? 'displayAlert' : 'hideAlert'} variant="success alert">
        {message}
    </Alert>)
}

export default AlertMessageComponent