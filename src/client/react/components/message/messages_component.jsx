import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Message from './message_component'
const MessagesComponent = ({
    messages
}) => {
    return(
        <section className="messages">
            <ListGroup>
                {messages.map(item => (
                    <Message key={item.id} text={item.message} />
                ))}
            </ListGroup>
        </section>
    )
}

export default MessagesComponent