import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import JoinForm from '../components/Join/JoinForm';
import logo from '../assets/logo.svg'
import './SignIn.css';

const SignIn = () => { 
	const { user } = useSelector((state) => state.auth);

	return user ? (
		<Redirect to="/chat" />
		) : (
			<div className="signInPage">
				<div className="header">
					<img alt="logo" src={logo} />
				</div>
				<JoinForm
					className="jForm"
				></JoinForm>
			</div>);
};

export default SignIn;