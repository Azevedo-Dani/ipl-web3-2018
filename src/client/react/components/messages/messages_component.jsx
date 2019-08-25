import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {Form, Button, Row, Col, FormControl } from 'react-bootstrap'
import Message from './message_component'
const MessagesComponent = ({
    messages, deleteMessage, newMessage, 
    handleChangeNewMessage, addMessage, onChangeSpecificMessage, updateMessage
}) => {
    console.log(messages)
    return(
        <section className="messages">
            <ListGroup>
                {messages.map(item => (
                    <Message onChangeSpecificMessage = {onChangeSpecificMessage} 
                    key={item._id} id={item._id} text={item.message} 
                    deleteMessage = {deleteMessage}
                    updateMessage = {updateMessage}/>
                ))}
                <ListGroup.Item>
                    <Row>
                    <Col xs={8}>
                        <Form.Group>
                            <FormControl type="text" onChange={handleChangeNewMessage} value={newMessage}
                                placeholder="new message"
                                />
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Button className="addMessage" onClick={() => addMessage(newMessage)} variant="btn btn-success">
                            Add
                        </Button>
                    </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </section>
    )
}

export default MessagesComponent