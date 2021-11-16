import { gql } from 'apollo-server-express';
import user from './user';

export default gql`

  ${user.type.def}

  type Query {
    """
    Test Message. 
    """
    testMessage: String!  
  }

  type Mutation{
    ${user.type.mutation}
  }
`;
