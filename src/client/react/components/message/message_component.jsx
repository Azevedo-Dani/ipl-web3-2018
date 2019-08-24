import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const MessageComponent = ({
    text
}) => {
    return <ListGroup.Item>
        {text}
        </ListGroup.Item>;
}

export default MessageComponent