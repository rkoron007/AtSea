import React from 'react';
import { parseTime } from "../../util/review_util";

const MessageFormItem = ({ message }) => (
    <li>
        <div className="user-message-info">
            <img src={message.imageUrl} />
            <p>{message.username}</p>
        </div>
        <div className="message-info">
            <p>{message.body}</p>
        </div>
        <p>{parseTime(message.created)}</p>
    </li>
);

export default MessageFormItem;