import React from 'react'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import MessagesComponent from './messages_component'
import './message_style.scss'
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
class MessagesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            loading: true
        }   
    }

    fetchMessage() {
        fetch('/api/messages').then(response => {return response.json()}).then(messages=> {
            this.setState({
                messages: messages,
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
                <MessagesComponent messages = {this.state.messages}/>
            </section>
           
        )
    }
    
}

export default MessagesContainer