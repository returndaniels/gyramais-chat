import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

const Header = ({ handleLogOut }) => {
	return (
		<div className="chatHeader">
				<img alt={logo} src={logo} />
				<button 
					onClick={()=> {
						if(window.confirm("Deseja sair?")){
							handleLogOut();
						}
					}}
				/>
		</div>
	);
};

export default Header;