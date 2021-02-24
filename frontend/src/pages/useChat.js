import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useSubscription } from '@apollo/client';
import { signOut } from '../state/auth/authActions';
import { saveMessages } from '../state/messages/messageActions';
import * as constants from '../api/constants';

function useChat() {
	const dispatch = useDispatch();
	const [postMessage] = useMutation(constants.POST_MESSAGE);
	const [logout] = useMutation(constants.LOGOUT_USER);
	const { data } = useSubscription(constants.STREAM_MESSAGES);
	const { messages } = useSelector(state => state.messages);
	const { user } = useSelector(state => state.auth);

	useEffect(() => {
		if(data){ dispatch(saveMessages(data.messages)); }
	}, [data, dispatch]);

	const sendMessage = message => {
		postMessage({
			variables: {
				user: user.name,
				text: message
			}
		});
	};

	const handleLogOut = () => {
		logout({
			variables: {
				_id: user._id,
				name: user.name
			}
		});
		dispatch(signOut());
	}
	
	return {
		user,
		messages,
		sendMessage,
		handleLogOut
	}
};

export default useChat