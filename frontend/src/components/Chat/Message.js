import React from 'react';
import './Message.css';

const Message = ({ message, highlighted, lastMessage }) => {
	return (
		<div 
			className={highlighted ? 'message highlighted': 'message'} 
			{...(lastMessage? {id: 'lastMessage'} : {})} 
		>
			<strong>{message.user}</strong>
			<p>{message.text}</p>
			{message.date && <div className='date'>{message.date}</div>}
		</div>
	);
};

export default Message;