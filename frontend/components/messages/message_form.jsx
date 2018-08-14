import React, { Component } from 'react';
import MessageFormItem from "./message_form_item";
import { merge} from 'lodash';
import Cable from 'actioncable';

class ChatShow extends Component {
    constructor(props) {
        super(props);
        this.state={
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        this.props.fetchMessages(this.props.match.params.chatId)
        this.createSocket();
    }

    update(field){
        return (e) => this.setState({body: e.target.value})
    }

    createSocket() {
    let cable;
    if (process.env.NODE_ENV !== 'production') {
      cable = Cable.createConsumer('http://localhost:3000/cable');
    } else {
      cable = Cable.createConsumer('wss://atsea.herokuapp.com/cable');
    }
    this.chats = cable.subscriptions.create({
    channel: "MessagesChannel",
    chat_id: this.props.match.params.chatId
    //  messageable_id: this.props.currentChat.id //this will be sent to messages_channel's params
    }, {
      connected: () => {
        console.log("CONNECTED!");
      },
      disconnected: () => {
        console.log("---DISCONNECTED---");
      },
      received: (data) => { //data passed from js/channels/messages.js.erb
        data.chatId = this.props.match.params.chatId;
        this.props.receiveMessage(data);
      }
    });
  }

    handleSubmit(e){
        e.preventDefault();
        let message = merge({}, this.state, {chat_id: this.props.match.params.chatId})
        this.props.createMessage(message).then(() => this.setState({body: ''}))
    }

    render() {
        if (!this.props.messages){
            return null;
        }
        return (
            <div>
                <h1>Working!</h1>
                <ul>
                    {this.props.messages.map(message => <MessageFormItem key={message.id} message={message} />)}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.update("body")} value={this.state.body} />
                    <input type="submit" value="Submit"/> 
                </form>
            </div>
        );
    }
}

export default ChatShow;
