import React from "react";
import Message from "../Message";

class MessageDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: this.props.messages};
    }
    changeStatus = (e) => {
        const {messages : oldStateMessages} = this.state;
        const newStateMessages = oldStateMessages.map(message => {
            const isRead = message.id === +e.target.id ? !message.isRead : message.isRead;
            return {...message, isRead: isRead}
        });
        this.setState({messages: newStateMessages});    
    };
    render () {
        //debugger;
        const {messages} = this.state;
        const messagesList = messages.map(message => <Message 
            id = {message.id}
            key = {message.id}
            sender = {message.sender}
            text = {message.text}
            onClick = {this.changeStatus}
            isRead = {message.isRead}
            />);
        return (
            <>
                {messagesList}
            </>
        );
    }
}

export default MessageDashboard;