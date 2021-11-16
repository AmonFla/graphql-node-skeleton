import jwt from 'jsonwebtoken';
import { environment } from '../environment';

export const userLogin = (args:any) :string => {
  const userToken = {
    ...args
  };
  return jwt.sign(userToken, environment.secret);
};

export const getUserByToken = (token: string) => {
  const decodedToken = jwt.verify(token, environment.secret);
  return decodedToken;
};
