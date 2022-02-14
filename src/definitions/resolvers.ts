import user from './custom/user';

export default {
  Query: {
    testMessage: (): string => 'Hello World!',
    ...user.resolver.query
  },
  Mutation: {
    ...user.resolver.mutation
  }
};
