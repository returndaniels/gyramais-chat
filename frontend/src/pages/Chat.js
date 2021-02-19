import React from 'react';
import Header from '../components/Chat/Header';
import Footer from '../components/Chat/Footer';
import MessageStory from "../components/Chat/MessageStory";
import useChat from './useChat';
import './Chat.css'

const Chat = ({ socket }) => {
	const { user, messages, sendMessage, handleLogOut } = useChat(socket);

  return (
		<div className="Chat">
			<Header handleLogOut={handleLogOut}></Header>
			<MessageStory
				user={user}
				messages={messages}
			>
			</MessageStory>
			<Footer className="footerChat" sendMessage={sendMessage}></Footer>
		</div>
	);
};

export default Chat;