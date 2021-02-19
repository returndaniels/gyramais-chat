import React, { useEffect, useState } from 'react';
import Header from '../components/Chat/Header';
import Footer from '../components/Chat/Footer';
import MessageStory from "../components/Chat/MessageStory";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../state/auth/authActions';
import { setMessage, saveMessages } from '../state/messages/messageActions';
import './Chat.css'

const Chat = ({ socket }) => {
	const dispatch = useDispatch();
	const { messages } = useSelector(state => state.messages);
	const { user } = useSelector(state => state.auth);
	const [errors, setError] = useState([]);

	const sendMessage = message => {
		socket.emit('sendMessage', { user, message }, error => {
			setError([...errors, error]);
		});
	};

	useEffect(() => {
		socket.emit('previusMessages');
		socket.on('previusMessages', messages => {
			dispatch(saveMessages(messages));
		});
		socket.on('message', message => {
			dispatch(setMessage(message));
		});
	  
	}, [dispatch, socket]);

  return (
		<div className="Chat">
			<Header handleLogOut={() => dispatch(signOut(socket, user))}></Header>
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