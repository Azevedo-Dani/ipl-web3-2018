import React from 'react'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';
import MessagesComponent from './messages_component'
import AlertMessageComponent from './alertMessage_component'
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
            loading: true,
            messageAlert: null,
            showAlert: false,
            newMessage: ''
        }
        this.deleteMessage = this.deleteMessage.bind(this)
        this.addMessage = this.addMessage.bind(this)
        this.handleChangeNewMessage = this.handleChangeNewMessage.bind(this) 
        this.onChangeSpecificMessage = this.onChangeSpecificMessage.bind(this)  
        this.updateMessage = this.updateMessage.bind(this)
    }
    onChangeSpecificMessage(id, e) {
        if (e && id) {
            const newMessage = e.target.value
            const messages = this.state.messages
            const messageIndex = messages.findIndex(message => message._id === id)
            if (messageIndex > -1){
                messages[messageIndex] = {
                    _id: messages[messageIndex]._id,
                    message: newMessage
                }
                this.setState({
                    messages: messages
                })
            }
        }
    }

    handleChangeNewMessage(e) {
        if (e) {
            this.setState({
                newMessage: e.target.value
            })
        }
    }

    updateMessage(id, newMessage){
        if (id && newMessage) {
            const url = '/api/messages/' + id
            const options = {
                method:'POST',
                body: JSON.stringify({
                    message: newMessage
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                })
            }
            fetch(url, options).then(result => {
                return result.text()
            }).then(resp => {
                this.setState({
                    showAlert: true, 
                    messageAlert: resp,
                    newMessage: ''
                })
                setTimeout(this.hideAlertMessage.bind(this), 2000)
                this.fetchMessage()
            })

        }
    }
    addMessage(message) {
        if (message) {
            const url = '/api/messages/'
            const options = {
                method: 'POST', 
                body: JSON.stringify({message: message}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                })
            }
            
            console.log(options)
            fetch(url, options).then(result => {
                return result.text()
            }).then(resp => {
                this.setState({
                    showAlert: true, 
                    messageAlert: resp,
                    newMessage: ''
                })
                setTimeout(this.hideAlertMessage.bind(this), 2000)
                this.fetchMessage()
            })
        }
    }

    deleteMessage(idMessage) {
        if (idMessage) {
            const url = '/api/messages/' + idMessage
            fetch(url, {method: 'DELETE'}).then(resp => {
                return resp.text()
            }).then(message => {
                this.setState({
                    showAlert: true, 
                    messageAlert: message
                })
                setTimeout(this.hideAlertMessage.bind(this), 2000)
                this.fetchMessage()
            })
        }   
    }

    hideAlertMessage() {
        this.setState({
            showAlert: false,
            messageAlert: null
        })
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
                <AlertMessageComponent show = {this.state.showAlert} message = {this.state.messageAlert}/>
                <ClipLoader
                                css={override}
                                sizeUnit={"px"}
                                size={150}
                                color={'#123abc'}
                                loading={this.state.loading}
                            />
                <MessagesComponent 
                    messages = {this.state.messages} 
                    deleteMessage = {this.deleteMessage}
                    addMessage = {this.addMessage}
                    newMessage = {this.state.newMessage}
                    onChangeSpecificMessage = {this.onChangeSpecificMessage}
                    handleChangeNewMessage = {this.handleChangeNewMessage}
                    updateMessage = {this.updateMessage}
                />
            </section>
           
        )
    }
    
}

export default MessagesContainer