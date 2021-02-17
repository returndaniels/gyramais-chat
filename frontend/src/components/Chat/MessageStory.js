import React from 'react';
import Message from './Message';
import './MessageStory.css';

const MessageStory = ({ messages, className }) => {
    return (
        <div className={`MessageStory ${className}`}>
            {messages.map(message => <Message message={message} /> )}
        </div>
    );
};

export default MessageStory;