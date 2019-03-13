import React, { Component } from 'react';
import MessageFormItem from "./message_form_item";
import { merge} from 'lodash';
import { Link } from "react-router-dom"
import NewChatForm from "./new_chat_form";
import Cable from 'actioncable';

class ChatShow extends Component {
    constructor(props) {
        super(props);
        this.state= {
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewChat = this.handleNewChat.bind(this);
    }


    componentDidMount(){
        this.props.fetchChats();
        this.props.fetchMessages(this.props.match.params.chatId)
        let socket = this.props.match.params.chatId;
        this.createSocket(socket);
    }
    
    componentWillReceiveProps(nextProps){
        if (this.props.match.params.chatId !== nextProps.match.params.chatId){
            this.props.fetchChats();
            this.props.fetchMessages(nextProps.match.params.chatId)
            let socket = nextProps.match.params.chatId;
            this.createSocket(socket);
        }
    }

    update(field){
        return (e) => this.setState({body: e.target.value})
    }

    createSocket(socket) {
    let cable;
    if (process.env.NODE_ENV !== 'production') {
      cable = Cable.createConsumer('http://localhost:3000/cable');
    } else {
      cable = Cable.createConsumer('wss://atsea.herokuapp.com/cable');
    }
    this.chats = cable.subscriptions.create({
    channel: "MessagesChannel",
    chat_id: socket
    }, {
      received: (data) => { 
        //data passed from js/channels/messages.js.erb
        data.chatId = socket;
        this.props.receiveMessage(data);
      }
    });
  }

  handleNewChat(){
      this.props.openModal();
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
            <div className="all-chats">
                <NewChatForm createChat={this.props.createChat} closeModal={this.props.closeModal} modal={this.props.modal} />
                <div className="chat-header">
                    <h1>Coversations</h1>
                    <button onClick={this.handleNewChat}>Create New Chat</button>
                </div>
                <div className="chat-index">
                    <ul>
                        {this.props.chats.map(chat => <li key={chat.id}><Link to={`/chats/${chat.id}`}>{chat.title}</Link></li>)}
                    </ul>
                </div>
                    <ul className="chat-container">
                        {this.props.messages.map(message => <MessageFormItem key={message.id} message={message} />)}
                    </ul>
                    

                    <form onSubmit={this.handleSubmit} className="input-box">
                        <textarea onChange={this.update("body")} value={this.state.body} />
                        <input type="submit" value="Submit"/> 
                    </form>
            </div>
        );
    }
}

export default ChatShow;
