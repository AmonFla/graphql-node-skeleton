import { UserInputError } from 'apollo-server-errors';
import { userLogin } from '../controllers/user';

export default {
  type: {
    def: `
            type Token{
                value: String!
            }   
    
        `,
    mutation: `
            """
                User Login
            """
            login(
                username: String!
                password: String!
            ): Token
        `

  },
  resolver: {
    mutation: {
      login: async (_root: any, args:any) => {
        try {
          const token:string = userLogin(args);
          return { value: token };
        } catch (e: any) {
          throw new UserInputError(e.message);
        }
      }
    }
  }
};
