import React from 'react';

const MessageFormItem = ({ message }) => (
    <li>
        <span>{message.id}</span>
        <span>{message.body}</span>
    </li>
);

export default MessageFormItem;