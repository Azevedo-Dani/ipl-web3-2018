import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Form, FormControl } from "react-bootstrap";

const MessageComponent = ({
    text, id, deleteMessage, onChangeSpecificMessage, updateMessage
}) => {
    const to = '/message/' + id
    return <ListGroup.Item>
            <Row>
                <Col xs={4}>
                    <Form.Group>
                        <FormControl onChange={(e) => onChangeSpecificMessage(id, e)} type="text" value={text}
                                />
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Button className="detailsButton" variant="outline-primary">
                        <Link to={to}>Détails</Link>
                    </Button>
                </Col>
                <Col xs={2}>
                    <Button className="updateMessage" onClick={() => updateMessage(id, text)} variant="btn btn-success">
                        Update
                    </Button>
                </Col>
                <Col xs={2}>
                    <Button className="deleteMessage" onClick={() => deleteMessage(id)} variant="btn btn-danger">
                        Delete
                    </Button>
                </Col>
                
            </Row>
              
               
        </ListGroup.Item>;
}

export default MessageComponent