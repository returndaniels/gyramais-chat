const typeDefs = `
	type Message {
		_id: ID!
		user: String!
		text: String!
		date: String
	}

	type User {
		_id: ID
		name: String!
		islogged: Boolean
	}

	type Query {
		messages: [Message!]
		user(_id: String!): User!
	}

	type Mutation {
		postMessage(user: String!, text: String!): ID!
		join(_id: String, name: String!, islogged: Boolean): ID!
		logout(_id: String, name: String): ID
	}

	type Subscription {
		messages: [Message!]
	}
`;

module.exports = { typeDefs };