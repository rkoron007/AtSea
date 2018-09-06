import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class NewChatForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
        this.handleNewChat = this.handleNewChat.bind(this)
        // this.props.createChat = this.props.createChat.bind(this)
    }

    handleNewChat(e) {
        e.preventDefault();
        this.props.createChat(this.state.title).then((action) => {
            this.props.closeModal();
            this.props.history.push(`/chats/${action.payload.chat.id}`)
        })
    }

    update(field) {
        return (e) => this.setState({ title: e.target.value })
    }
    
    render() {
        if (!this.props.modal){
            return null;
        }
        return (
            <div className="modal-backdrop">
                <form className="modal-window" onSubmit={this.handleNewChat}>
                    <h1 className="modal-header">Create A New Chatroom</h1>
                    <input type="text" value= {this.state.title} onChange={this.update("title")}></input>
                    <input type="submit" value="Create Chat!"></input>
                </form>
            </div>
        );
    }
}

export default withRouter(NewChatForm);
