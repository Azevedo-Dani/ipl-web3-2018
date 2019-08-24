import React from 'react'
import MessagesComponent from './messages_component'
class MessagesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }   
    }

    fetchMessage() {
        this.setState({
            messages: [{
                id: '1', 
                message: 'hello'
            },{
                id:'2',
                message: 'Dani'
            }]
        })
    }
    componentDidMount() {
        this.fetchMessage()
    }
    render() {
        return (
            <MessagesComponent messages = {this.state.messages}/>
        )
    }
    
}

export default MessagesContainer