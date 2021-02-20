import React from 'react';
import './Message.css';

const Message = ({ message, highlighted }) => {
	return (
		<div className={highlighted ? 'message highlighted': 'message'}>
			<strong>{message.user}</strong>
			<p>{message.text}</p>
			{message.date && <div className='date'>{message.date}</div>}
		</div>
	);
};

export default Message;