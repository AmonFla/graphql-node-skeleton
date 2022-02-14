import { gql } from 'apollo-server-express';
import user from './custom/user';

export default gql`

  ${user.type.def}

  type Query {
    """
    Test Message. 
    """
    testMessage: String!  
    ${user.type.query}
  }

  type Mutation{
    ${user.type.mutation}
  }
`;
