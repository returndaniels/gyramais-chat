import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";

const connect = ()=> {
	const link = new WebSocketLink({
		uri: `ws://gyramais-chat.herokuapp.com/`,
		options: {
			reconnect: true,
		},
	});

	const client = new ApolloClient({
		link,
		uri: "https://gyramais-chat.herokuapp.com/",
		cache: new InMemoryCache(),
	});

	return client;
}

export { connect };