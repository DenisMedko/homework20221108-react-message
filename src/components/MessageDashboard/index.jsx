import React from "react";
import Message from "../Message";

class MessageDashboard extends React.Component {
    
    render () {
        const {messages} = this.props;
        const messagesList = messages.map(message => <Message 
            key = {message.id}
            sender = {message.sender}
            text = {message.text}
            />);
        return (
            <>
                {messagesList}
            </>
        );
    }
}

export default MessageDashboard;