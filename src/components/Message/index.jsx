import React from "react";

class Message extends React.Component {
    
    render () {
        const { id, sender, text, isRead, onClick} = this.props;
        //debugger;
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