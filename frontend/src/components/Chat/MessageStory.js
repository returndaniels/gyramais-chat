import React from 'react';
import Message from './Message';
import ScrollToBotton from 'react-scroll-to-bottom';
import './MessageStory.css';

const MessageStory = ({ messages, user, className }) => {

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
		<ScrollToBotton className={`MessageStory ${className}`}>
			{messages.map((message, index) =>
				<Message 
					key={index}
					message={{
						...message, 
						date: formatStringDate(message.date)
					}} 
					highlighted={message.user === user.name} 
				/>
		)}
		</ScrollToBotton>
	);
};

export default MessageStory;