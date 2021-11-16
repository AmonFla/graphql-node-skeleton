import { getUserByToken } from '../controllers/user';

export const context = ({ req }:{req:any}) => {
  const auth = req ? req.headers.authorization : null;
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    const currentUser = getUserByToken(auth.substring(7));
    return { currentUser };
  }
};
