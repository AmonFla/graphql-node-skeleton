import user from './user';

export default {
  Query: {
    testMessage: (): string => 'Hello World'
  },
  Mutation: {
    ...user.resolver.mutation
  }
};
