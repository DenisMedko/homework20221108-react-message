import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isRead: false};
    }
    changeStatus = () => {
        this.setState({isRead: !this.state.isRead});
    };
    render () {
        const {sender, text} = this.props;
        return (
            <>
                <div>Message from : {sender}</div>
                <div>Text : {text}</div>
                <button onClick={this.changeStatus} disabled={this.state.isRead}>OK</button>
            </>
        );
    }
}

export default Message;