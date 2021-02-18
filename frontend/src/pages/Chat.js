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
	const [errors, setErrors] = useState([]);

	const sendMessage = message => {
		socket.emit('sendMessage', message, error => {
			if(error){ 
			  setErrors([...errors, error]);
			}
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
			<Header handleLogOut={() => dispatch(signOut(socket))}></Header>
			<MessageStory 
				messages={messages}
			>
			</MessageStory>
			<Footer className="footerChat" sendMessage={sendMessage}></Footer>
		</div>
	);
};

export default Chat;