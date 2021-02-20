import React, { useEffect } from 'react';
import Message from './Message';
import './MessageStory.css';

const MessageStory = ({ messages, user, className }) => {

	useEffect(() => {
		document.getElementById('lastMessage')?.scrollIntoView();
	});

	const formatStringDate = date => {
		if(!date) return date;
		var formatedString = '';
		formatedString += `${date.slice(11, 16)} - `;
		formatedString += `${date.slice(8, 10)}/`;
		formatedString += `${date.slice(5, 7)}/`;
		formatedString += `${date.slice(0, 4)}`;
		return formatedString;
	}

	return (
		<div className={`MessageStory ${className}`}>
			{messages.map((message, index) =>
				<Message 
					key={index}
					lastMessage={index === messages.length-1}
					message={{
						...message, 
						date: formatStringDate(message.date)
					}} 
					highlighted={message.user === user.name} 
				/>
			)}
		</div>
	);
};

export default MessageStory;