import React from 'react'
import MessageComponent from './message_component'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
class MessageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            message: null,
            loading: true
        }
    }

    fetchMessage() {
        const url = '/api/messages/' + this.state.id
        fetch(url).then(response => {return response.json()})
        .then(message => {
            this.setState({
                message: message.message,
                loading: false
            })
        })
    }

    componentDidMount() {
        setTimeout(this.fetchMessage.bind(this), 2000)
    }

    render() {
        return (
            <section className="message">
                  <ClipLoader
                                css={override}
                                sizeUnit={"px"}
                                size={150}
                                color={'#123abc'}
                                loading={this.state.loading}
                            />
                    <MessageComponent message = {this.state.message}/>
                    <Button className="detailsButton" variant="outline-primary">
                        <Link to="/messages">Back</Link>
                    </Button>

            </section>
        )
    }
}

export default MessageContainer