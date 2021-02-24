const { getMessages, createMessage } = require('./controllers/messages');
const { getUser, createUser, deleteUser } = require('./controllers/users');

var messages = [];
const subscribers = [];

const onMessagesUpdates = (fn) => subscribers.push(fn);

const generateHash = (string) => {
  var hash = 0, i, chr;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; 
  }
  return hash;
} 

const resolvers = {
	Query: {
	  messages: async () => {
			try {
				messages = await getMessages();
				return messages
		  } catch (error) {
				console.error(`Error in messagesApi ${error}`);
				throw error;
			}
		
		},
		user: async (parent, { _id }) => {
			try {
				const user = await getUser(_id);
				return user;
			} catch(error){
				console.error(`Error in userApi ${error}`);
				throw error;
			}
		}
	},
	Mutation: {
	  postMessage: async (parent, { user, text }) => {
			const _id = messages.length;

			messages.push({
				_id,
				user,
				text,
			});

			try {
				await createMessage({ 
					text: text, 
					user: user, 
					userIslogged: true, 
					date: new Date() 
				});

				subscribers.forEach((fn) => fn());
				return _id;
			} catch(error) {
				console.error(`Error in messagesApi ${error}`);
				throw error;
			}
		},
		join: async (parent, { name }) => {
			const _id = generateHash(name);
			const date = new Date();

		  if(messages.length === 0) {
				messages = await getMessages();
			}

			try {
				await createUser({
					_id,
					name,
					islogged: true
				});
	
				messages.push({ 
					_id: "0", 
					user: 'Admin', 
					text: `${name} entrou.`, 
					date: `${date.getTime()}` 
				});

				subscribers.forEach((fn) => fn());
				return _id;
			} catch(error) {
				console.error(`Error in userApi ${error}`);
				throw error;
			}
		},
		logout: async (parent, { _id, name }) => {
			try {
				await deleteUser(_id);

				messages.push({ 
					_id: "0", 
					user: 'Admin', 
					text: `${name} saiu.`, 
					date: `${date.getTime()}` 
				});

				subscribers.forEach((fn) => fn());
				return _id;
			} catch (error) {
				console.error(`Error in userApi ${error}`);
				throw error;
			}
		}
	},
	Subscription: {
	  messages: {
			subscribe: (parent, args, { pubsub }) => {
				const channel = Math.random().toString(36).slice(2, 15);
				onMessagesUpdates(() => pubsub.publish(channel, { messages }));
				setTimeout(() => pubsub.publish(channel, { messages }), 0);
				return pubsub.asyncIterator(channel);
			},
	  },
	},
};
module.exports = {resolvers};