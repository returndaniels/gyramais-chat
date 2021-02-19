import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../state/auth/authActions';
import { setMessage, saveMessages } from '../state/messages/messageActions';

function useChat(socket) {
	const dispatch = useDispatch();
	const { messages } = useSelector(state => state.messages);
	const { user } = useSelector(state => state.auth);
	const [errors, setError] = useState([]);

	useEffect(()=>{
		socket.emit('previusMessagesRequest');
		socket.emit('userLoggedIn', user);
	}, [socket, user]);

	useEffect(() => {
		socket.on('previusMessagesResponse', messages => {
			dispatch(saveMessages(messages));
		});
		socket.on('message', message => {
			dispatch(setMessage(message));
		});
		socket.on('userJoinedEvent', event => {
			dispatch(setMessage(event));
		});
	  
    }, [dispatch, socket]);

    const sendMessage = message => {
		socket.emit('sendMessage', { user, message }, error => {
			setError([...errors, error]);
		});
    };

    const handleLogOut = () => {
        dispatch(signOut(socket, user));
    }
    
    return {
        user,
        messages,
        errors,
        sendMessage,
        handleLogOut
    }
};

export default useChat