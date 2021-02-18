import React from 'react';
import Message from './Message';
import './MessageStory.css';

const MessageStory = ({ messages, user, className }) => {
	return (
		<div className={`MessageStory ${className}`}>
			{messages.map(message =>
				<Message 
					message={message} 
					highlighted={message.user === user.name} 
				/>
			)}
		</div>
	);
};

export default MessageStory;