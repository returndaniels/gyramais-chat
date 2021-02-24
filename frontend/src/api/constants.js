
import { gql } from "@apollo/client";

export const JOIN_USER = gql`
	mutation($name: String!) {
		join(name: $name)
	}
`;

export const LOGOUT_USER = gql`
	mutation($_id: String!, $name: String!) {
		logout(_id: $_id, name: $name)
	}
`;

export const POST_MESSAGE = gql`
	mutation($user: String!, $text: String!) {
		postMessage(user: $user, text: $text)
	}
`;

export const GET_MESSAGES = gql`
	query {
		messages {
			_id
			user
			text
			date
		}
	}
`;

export const STREAM_MESSAGES = gql`
	subscription {
		messages {
			user
			text
			date
		}
	}
`;