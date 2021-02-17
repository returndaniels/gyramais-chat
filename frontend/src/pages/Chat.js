import React from 'react';
import Header from '../components/Chat/Header';
import Footer from '../components/Chat/Footer';
import MessageStory from "../components/Chat/MessageStory";
import { useDispatch } from 'react-redux';
import { signOut } from '../state/auth/authActions';
import './Chat.css'

const Chat = ({ socket }) => {
	const dispatch = useDispatch();
  return (
		<div className="Chat">
			<Header handleLogOut={() => dispatch(signOut(socket))}></Header>
			<MessageStory 
				messages={[
					{user: 'Angelo', text: 'Oi! quero comer logo!'},
					{user: 'Carlos', text: 'De fato.'},
					{user: 'Daniel', text: 'Alan Mathison Turing (23 de junho de 1912 - 7 de junho de 1954) foi um matemático,[1] cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral.[2][3][4] Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial.[5] Apesar dessas realizações, ele nunca foi totalmente reconhecido em seu país de origem durante sua vida por ser homossexual e porque grande parte de seu trabalho foi coberto pela Lei de Segredos Oficiais. '}
				]}
			>
			</MessageStory>
			<Footer className="footerChat"></Footer>
		</div>
	);
};

export default Chat;