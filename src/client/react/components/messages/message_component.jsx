import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const MessageComponent = ({
    text, id
}) => {
    const to = '/message/' + id
    return <ListGroup.Item>
                {text}
                <Button className="detailsButton" variant="outline-primary">
                    <Link to={to}>Détails</Link>
                </Button>
        </ListGroup.Item>;
}

export default MessageComponent