import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ sendMessage, className }) => {
	const [message, setMessage] = useState('');

	return (
		<footer className={`footer ${className}`}>
			<textarea
				rows="2" 
				cols="50"
				placeholder="Digite uma mensagem..."
				value={message}
				onChange={e => {
					e.preventDefault();
					setMessage(e.target.value);
				}}
				style={{resize: "none"}}
			></textarea>
			<button 
					onClick={()=> {
						sendMessage(message);
						setMessage('');
					}}
			>
				Enviar
			</button>
		</footer>
	);
};

export default Footer;