import express from 'express';
import bodyParser from 'body-parser';

// Apollo and GraphQL
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/typeDefs';
import rootResolver from './graphql/resolvers/rootResolver';

// Database
import { connection } from './database/database';

// Constans
import { PORT } from './config/constants';

const server = new ApolloServer({ typeDefs, resolvers: rootResolver });

const app = express();
app.use(bodyParser.json());
server.applyMiddleware({ app });

connection().then(async () => {
  app.listen(PORT, () :void => { console.info('Server started!'); });
});
