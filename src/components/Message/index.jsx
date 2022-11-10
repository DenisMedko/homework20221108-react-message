import React from "react";

class Message extends React.Component {
    
    render () {
        //debugger;
        const { 
            message : {
                id = 'no id', 
                sender = 'no name', 
                text = 'no text', 
                isRead = false
            },
            onClick = () => {}
        } = this.props;
         
        return (
            <>
                <div>Message from : {sender}</div>
                <div>Text : {text}</div>
                <button id={id} onClick={onClick} disabled={isRead}>OK</button>
            </>
        );
    }
}

export default Message;