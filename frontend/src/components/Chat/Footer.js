import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ sendMessage }) => {
	const [message, setMessage] = useState('');

	return (
		<footer className="footer">
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
					}}
			/>
		</footer>
	);
};

export default Footer;