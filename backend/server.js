const { GraphQLServer, PubSub } = require("graphql-yoga");

require('dotenv').config();
require('./database');

const { resolvers } = require('./resolvers');
const { typeDefs } = require('./graphql');

const port = process.env.PORT || 4200;

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

const opts = {
  port,
  cors: {
    origin: "*"
  }
};

server.start(opts, () => {
  console.log(`Server on http://localhost:${port}/`);
});
