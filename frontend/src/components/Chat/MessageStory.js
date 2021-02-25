import React from 'react';
import Message from './Message';
import ScrollToBotton from 'react-scroll-to-bottom';
import './MessageStory.css';

const MessageStory = ({ messages, user, className }) => {

	const formatStringDate = date => {
		if(!date) return date;
		var formatedString = '';
		formatedString += `${date.slice(8, 10)} `;
		formatedString += `${date.slice(4, 7)} `;
		formatedString += `${date.slice(11, 15)} - `;
		formatedString += `${date.slice(16, 21)}`;
		return formatedString;
	}

	return (
		<ScrollToBotton className={`MessageStory ${className}`}>
			{messages.map((message, index) =>
				<Message 
					key={index}
					message={{
						...message, 
						date: formatStringDate(
							new Date(Number(message.date)).toString()
						)
					}} 
					highlighted={message.user === user.name} 
				/>
		)}
		</ScrollToBotton>
	);
};

export default MessageStory;