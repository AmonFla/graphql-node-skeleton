import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import express from 'express';

import resolvers from './definitions/resolvers';
import typeDefs from './definitions/type-defs';
import { context } from './definitions/context';

import { makeExecutableSchema } from '@graphql-tools/schema';

import { environment } from './environment';

async function startApolloServer (typeDefs: any, resolvers: any, context: any) {
  // Required logic for integrating with Express
  const app = express();
  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    schema,
    context
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/'
  });

  // Modified server startup
  await new Promise((resolve:any) => httpServer.listen({ port: environment.port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${environment.port}${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers, context);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}
