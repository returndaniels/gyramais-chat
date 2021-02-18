import React from 'react';
import './Message.css';

const Message = ({ message }) => {
	return (
		<div className="message">
			<strong>{message.user}</strong>
			<p>{message.text}</p>
		</div>
	);
};

export default Message;