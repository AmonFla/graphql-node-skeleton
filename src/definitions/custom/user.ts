import { UserInputError } from 'apollo-server-errors';
import { userLogin } from '../../controllers/user';

export default {
  type: {
    def: `
            type Token{
                value: String!
            }   
    
        `,
    query: `
    """
          Obtener la información almacenada en el token.
          """
          me: String!
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
    query: {
      me: (_root: any, _args: any, context: any) => context.currentUser.username
    },
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
